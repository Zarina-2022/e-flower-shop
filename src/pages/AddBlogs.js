import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SubMenu from "../components/SubMenu";

/* import ReactRichEditor from "react-rich-text-editor"; */
import Editor from "react-simple-wysiwyg";

import { Form, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import api from "../api/api";
import endpoints from "../api/endpoints";
import actionTypes from "../redux/actions/actionTypes";

const AddBlogs = () => {
  const { loginState, categoriesState } = useSelector((state) => state);
  const navigate = useNavigate();
    const dispatch = useDispatch()

  const [form, setForm] = useState({
    id: String(new Date().getTime()),
    title: "",
    description: "",
    content: "",
    img: "",
    categoryId: "",
    userId: loginState?.user?.userId,
  });

  useEffect(() => {
    if (!loginState.success) navigate("/login");
  }, [loginState]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post(endpoints.blogs,form)
    .then((res)=>{
        dispatch({type:actionTypes.blogActions.ADD_BLOGS,payload:form})
        navigate("/admin-home")
    })
    .catch((err)=>{})
  };

  return (
    <div>
      <Header />
      <SubMenu isAdmin={loginState?.user?.role === "admin"} />

      <div style={{ padding: "30px 100px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={form.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Editor
              containerProps={{ style: { resize: "vertical" } }}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </Form.Group>

          <Form.Select
            value={form.categoryId}
            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            aria-label="Default select example"
            className="mb-3"
          >
            <option>Choose category</option>
            {categoriesState?.categories?.map((item) => (
              <option key={item?.id} value={item?.id}>
                {item?.name}
              </option>
            ))}
          </Form.Select>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="success"
              type="submit"
              style={{ padding: "10px 60px" }}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddBlogs;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SubMenu from "../components/SubMenu";
import ListBlogs from "../components/ListBlogs";
import { Button } from "react-bootstrap";

const AdminHome = () => {
  const { loginState } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState.success) navigate("/login");
  }, [loginState]);

  return (
    <div>
      <Header />
      <SubMenu isAdmin={loginState?.user?.role === "admin" ? true : false} />
      <div style={{position:"relative"}}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "-8px",
            right: "70px",
          }}
        >
          <Button onClick={()=>navigate("/admin-home/add-blog")} variant="primary">Add Blog</Button>
        </div>
      </div>
      <ListBlogs />
    </div>
  );
};

export default AdminHome;

// ES6 - optional chaining(?.)
/*
The optional chaining (?.) operator accesses an object's property
 or calls a function. If the object accessed or function called
  using this operator is undefined or null, the expression 
  short circuits and evaluates to undefined instead of 
  throwing an error.
  Bu soru isatreti sayesinde hata vermiyor!!!
*/

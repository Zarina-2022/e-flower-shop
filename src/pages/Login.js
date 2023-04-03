import React, { useState, useEffect } from "react";

import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

import { useNavigate, Link } from "react-router-dom";

import AlertModal from "../components/AlertModal";

const Login = () => {
  const { usersState, loginState } = useSelector((state) => state);

  const [dangerModal, setDangerModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  // tekrar login sayfasina gidemesin diye:
  useEffect(() => {
    if (loginState.success) navigate("/");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    //Validation
    const hasUser = usersState.users.find(
      (item) => item.username === form.username
    );

    if (hasUser === undefined || hasUser.password !== form.password) {
      setDangerModal(true);
      setTimeout(() => {
        setDangerModal(false);
      }, 3000);
    } else {
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        navigate("/");
      }, 1000);
    }
    dispatch({
      type: actionTypes.loginActions.LOGIN_SUCCESS,
      payload: { username: hasUser.username, role: hasUser.role,userId: hasUser.id},
    });
    const successLoginState = {
      panding: false,
      success: true,
      error: false,
      errorMessage: "",
      user: {
        username: hasUser.username,
        role: hasUser.role,
        userId: hasUser.id,
      },
    };
    // localStorage'e sadece string yazabildigimiz icin stringify use:
    localStorage.setItem("loginState", JSON.stringify(successLoginState));
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        &lt;&lt; back to homepage
      </Link>
      <h1 className="my-5 text-center text-primary">LOGIN</h1>
      <AlertModal
        variant={"danger"}
        text={"The username or password you entered is incorrect."}
        visible={dangerModal}
      />
      <AlertModal
        variant={"success"}
        text={"Congratulations!!! You have successfully logged in."}
        visible={successModal}
      />
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="text"
            placeholder="Enter your username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;

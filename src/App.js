import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//routing stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

//api stuff
import api from "./api/api";
import endpoints from "./api/endpoints";

// redux stuff
import actionTypes from "./redux/actions/actionTypes";
import { useDispatch, useSelector } from "react-redux";

// pages
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";
import AddBlogs from "./pages/AddBlogs";
import BlogDetail from "./pages/BlogDetail";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import ErrorAlert from "./pages/ErrorAlert";
import SuccessAlert from "./pages/SuccessAlert";



function App() {
  const dispatch = useDispatch();
  const { blogsState, categoriesState, usersState } = useSelector(
    (state) => state
  );

  useEffect(() => {
    // fetch/get blogs
    dispatch({ type: actionTypes.blogActions.GET_BLOGS_START });
    api
      .get(endpoints.blogs)
      .then((res) =>
        dispatch({
          type: actionTypes.blogActions.GET_BLOGS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.blogActions.GET_BLOGS_FAIL,
          payload: "An error occurred while getting data.",
        })
      );
    // fetch/get categories
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(endpoints.categories)
      .then((res) =>
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "An error occurred while getting data.",
        })
      );
    // fetch/get users
    dispatch({ type: actionTypes.userActions.GET_USERS_START });
    api
      .get(endpoints.users)
      .then((res) =>
        dispatch({
          type: actionTypes.userActions.GET_USERS_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.userActions.GET_USERS_FAIL,
          payload: "An error occurred while getting data.",
        })
      );
    /*  Read loginState from localStorage */
    const loginstateFromLocalstorage = JSON.parse(
      localStorage.getItem("loginState")
    );
    if (loginstateFromLocalstorage === null) {
      localStorage.setItem(
        "loginState",
        JSON.stringify({
          panding: false,
          success: false,
          error: false,
          errorMessage: "",
          user: null,
        })
      );
    } else {
      if (loginstateFromLocalstorage.success) {
        dispatch({
          type: actionTypes.loginActions.LOGIN_SUCCESS,
          payload: loginstateFromLocalstorage.user,
        });
      }
    }
  }, []);

  // erken kacis satiri
  if (!blogsState.success || !categoriesState.success || !usersState.success) {
    return null;
  }
  if (blogsState.error || categoriesState.error || usersState.error) {
    return <ErrorAlert />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-home/add-blog" element={<AddBlogs />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error-alert" element={<ErrorAlert />} />
        {/* <Route path="/success-alert" element={<SuccessAlert />} /> */}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import styles from "../assets/styles/listBlogs.module.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const ListBlogs = () => {
  const { blogsState, categoriesState, usersState, loginState } = useSelector(
    (state) => state
  );

  let blogs = [];
  if (loginState?.user?.role === "admin") {
    blogs = blogsState?.blogs;
  } else {
    blogs = blogsState?.blogs?.filter(
      (item) => item?.userId === loginState?.user?.userId
    );
  }

  return (
    <div className={`${styles.listBlogsWrapper} ${styles.shadow}`}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Writer</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog, index) => {
            const category = categoriesState?.categories?.find(
              (item) => item.id === blog?.categoryId
            );
            const user = usersState?.users?.find(
              (item) => item.id === blog?.userId
            );
            return (
              <tr key={blog?.id}>
                <td>{index + 1}</td>
                <td>{blog?.title}</td>
                <td>{category?.name}</td>
                <td>{user?.username}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListBlogs;

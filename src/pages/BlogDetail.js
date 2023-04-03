import React from "react";

import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "../assets/styles/blogDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();
  const { blogsState, usersState } = useSelector((state) => state);
  const myBlog = blogsState?.blogs?.find((item) => item?.id === blogId);
  const user = usersState?.users?.find((item) => item?.id === myBlog?.userId);
  const writeDate = new Date()
  return (
    <div>
      <Header />

      <section className="flowersSection">
        <div className="imgSection">
          <img src={myBlog?.img2} alt="image" />
        </div>

        <h1 className="flowersTitle">{myBlog?.subtitle}</h1>

        <div className="flowerTypes">
          <p
            className="flowersSubTitle" 
            dangerouslySetInnerHTML={{ __html: myBlog?.content}}
          ></p>

          <div className="flowerAuthor">
            <h4>{user?.username}</h4>
            <h5 id="flowersDate">{writeDate.toLocaleDateString().replaceAll("/",".")}</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;

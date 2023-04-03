import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { loginState, categoriesState, blogsState } = useSelector(
    (state) => state
  );

  return (
    <div>
      <Header />
      {/* <!-- MAIN SECTION -->
  <!-- Left side --> */}
      <main className="mainContainer">
        <section className="leftSide">
          <div className="categoriesTitleContainer">
            <p style={{ margin: "0" }}>Categories :</p>
          </div>
          <ul className="categoriesList">
            {categoriesState.categories.map((item) => (
              <li key={item.id}>
                <Link to={"/"}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* <!-- Right side --> */}
        <section className="rightSide">
          {blogsState?.blogs?.map((blog) => {
            return (
              <div key={blog?.id} className="cardContainer">
                <div className="cardImageContainer">
                  <img src={blog?.img1} alt="image" />
                </div>

                <div className="info">
                  <h3 className="blogTitle">{blog?.title}</h3>
                  <p className="blogSummary">{blog?.description}</p>
                </div>

                <div className="btn">
                  <Link to={`/blog/${blog?.id}`}>
                    Read more <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Home;
import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../assets/styles/about_us.css";

import circleImg from "../assets/images/flowers.jpg";
import aboutHeader from "../assets/images/aboutus.jpg";
import img1 from "../assets/images/card3.jpg";
import img2 from "../assets/images/card1.webp";
import img3 from "../assets/images/card2.webp";
import img4 from "../assets/images/card4.jpg";
import img5 from "../assets/images/card6.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="aboutSection">
        {/*  ROW - 1 */}

        <div className="aboutInfo">
          <div className="aboutImg">
            <img src={circleImg} alt="" />
          </div>

          <div className="aboutStaff">
            <p>
              For almost 45 years we have been delivering flowers, good wishes
              and heartfelt emotions across the Europe.
            </p>
            <p>
              As 'the flower experts', we wanted to have somewhere to share our
              knowledge and advice, so we created an online resource for all
              kinds of information, news and care tips about flowers and plants.
            </p>
            <p>
              We hope you find what you're looking for, and even learn something
              new! We'll update the site with the latest information and news
              every week, and if there's anything you want to know but can't
              find on here, get in touch and we'll do our best to answer your
              query.
            </p>
          </div>
        </div>

        {/*ROW -  2*/}

        <div className="aboutUs">
          <div className="aboutLeft">
            <span className="aboutSpan">Follow us :</span>

            <hr />

            <div>
              <Link to={"/#"} className="aboutItem">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </Link>
            </div>

            <div>
              <Link to={"/#"} className="aboutItem">
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter</span>
              </Link>
            </div>

            <div>
              <Link to={"/#"} className="aboutItem">
                <i className="fa-brands fa-linkedin-in"></i>
                <span>Linkedin</span>
              </Link>
            </div>

            <div>
              <Link to={"/#"} className="aboutItem">
                <i className="fa-brands fa-pinterest"></i>
                <span>Pinterest</span>
              </Link>
            </div>

            <div>
              <Link to={"/#"} className="aboutItem">
                <i className="fa-brands fa-youtube"></i>
                <span>Youtube</span>
              </Link>
            </div>

            <div>
              <Link to={"mailto:flowers@gmail.com"} className="aboutItem">
                <i className="fa-solid fa-envelopes-bulk"></i>
                <span>flowers@gmail.com</span>
              </Link>
            </div>

            <div>
              <Link to={"tel:+35 546 567 657"} className="aboutItem">
                <i className="fa-solid fa-phone"></i>
                <span>+35 546 567 657</span>
              </Link>
            </div>
          </div>

          <div className="aboutRight">
            <div className="imageAboutUs">
              <img src={aboutHeader} alt="" />
            </div>
            <h3>
              When we're working with a client, we believe they deserve 100% of
              our attention and energy. We focus exclusively on bringing your
              floral dreams to life.{" "}
            </h3>
            <h2>OUR TEAM:</h2>

            {/*Team cards*/}
            <div className="parentCardsContainer">
              <div className="childCardsContainer">
                <h3 className="positionImg">Art Director</h3>
                <div className="cardImg">
                  <img src={img1} alt="" />
                </div>
                <p className="teamName">Tom Fisherman</p>
                <div className="linkImg">
                  <Link to={"/#"} target="_blank">
                    Learn meer <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>

              <div className="childCardsContainer">
                <h3 className="positionImg">Head of Marketing</h3>
                <div className="cardImg">
                  <img src={img2} alt="" />
                </div>
                <p className="teamName">Sandra Block</p>
                <div className="linkImg">
                  <Link to={"/#"} target="_blank">
                    Learn meer <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>

              <div className="childCardsContainer">
                <h3 className="positionImg">Designer</h3>
                <div className="cardImg">
                  <img src={img3} alt="" />
                </div>
                <p className="teamName">Marianna White</p>
                <div className="linkImg">
                  <Link to={"/#"} target="_blank">
                    Learn meer <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>

              <div className="childCardsContainer">
                <h3 className="positionImg">Designer</h3>
                <div className="cardImg">
                  <img src={img4} alt="" />
                </div>
                <p className="teamName">Jack Moor</p>
                <div className="linkImg">
                  <Link to={"/#"} target="_blank">
                    Learn meer <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>

              <div className="childCardsContainer">
                <h3 className="positionImg">Designer</h3>
                <div className="cardImg">
                  <img src={img5} alt="" />
                </div>
                <p className="teamName">Kate Rosalien</p>
                <div className="linkImg">
                  <Link to={"/#"} target="_blank">
                    Learn meer <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

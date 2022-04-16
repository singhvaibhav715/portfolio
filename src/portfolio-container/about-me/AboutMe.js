import React from "react";
import "./AboutMe.css";
import Typical from "react-typical";
import hero from "../../images/profile_picture.png";
function AboutMe() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Vaibhav Singh</span>
            </h1>
            <h2>
              a
              <span>
                <Typical
                  steps={[
                    " Full Stack Developer",
                    1000,
                    " Professional Coder",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </h2>

            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

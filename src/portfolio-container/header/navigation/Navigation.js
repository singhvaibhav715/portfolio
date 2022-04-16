import React, { useState } from "react";
import logo from "../../../images/logo.png";
import "./Navigation.css";
//For React Icons
import { FaTimes, FaBars } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";

function Navigation() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" className="logo-img" />
            <h2 className="logo-title">vaibhav</h2>
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#blog">about me</a>
              </li>
              <li>
                <a href="#blog">education</a>
              </li>
              <li>
                <a href="#blog">work</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">RESUME</button>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <FaTimes className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;

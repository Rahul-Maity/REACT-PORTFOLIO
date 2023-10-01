import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter
} from "react-icons/fa";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>721517, Jhargram, West Benagl, India</p>
            
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />{" "}
              +91-9932959206
            </h4>
          </div>

          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
                />
                <p> mrahulmaity623@gmail.com</p> 
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            {" "}
            Passionate Software Engineer | Problem Solver | MERN Stack Developer
            | LeetCode Enthusiast | Web Development Wizard
          </p>
          <div className="social">
            <a
              href="#"
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/rahul-maity-432a70215/";
              }}
            >
              {" "}
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="#"
              onClick={() => {
                window.location.href = "https://twitter.com/mrahulmaity623";
              }}
            >
              {" "}
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="#"
              onClick={() => {
                window.location.href = "https://github.com/Rahul-Maity";
              }}
            >
              {" "}
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

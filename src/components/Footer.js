import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p> 60 Frederick St. </p>
              <p> Kitchener, ON, N2H0C7</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              uccshreyanshi90@gmail.com
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +1(519)830-7680
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            This is me Shreyanshi Vashistha, full stack web developer. I enjoy
            developing new solutions and solving design challenges.
          </p>
          <div className="social">
            <Link
              to="https://www.linkedin.com/in/shreyanshi-vashistha-64102112a/"
              target={"_blank"}
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to="https://twitter.com/Shreyanshi2008" target={"_blank"}>
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

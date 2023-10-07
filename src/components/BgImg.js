import "../styles/BgImg.css";
import MainImg from "../assets/bgimg.jpg";

import React from "react";
import { Link } from "react-router-dom";
import SV_Resume from "../assets/Shreyanshi_Vashistha_Resume.pdf";

const BgImg = () => {
  return (
    <div className="bg">
      <div className="mask">
        <img className="mainImg" src={MainImg} alt="background" />
      </div>
      <div className="content">
        <p>Hey! I'm a Full Stack</p>
        <h1>Web Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>

          <a href={SV_Resume} download="resume.pdf" className="btn-light">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default BgImg;

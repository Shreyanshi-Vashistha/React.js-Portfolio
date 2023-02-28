import "../styles/BgImg.css";
import MainImg from "../assets/bgimg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const BgImg = () => {
  return (
    <div className="bg">
      <div className="mask">
        <img className="mainImg" src={MainImg} alt="background" />
      </div>
      <div className="content">
        <p>Hey! I'm a freelancer</p>
        <h1>Web Developer</h1>
        <div>
          <Link to="/projects" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BgImg;

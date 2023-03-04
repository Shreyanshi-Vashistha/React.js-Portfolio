import React from "react";
import { Link } from "react-router-dom";

import "../styles/AboutMe.css";
import aboutMe from "../assets/aboutMe.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>Heya.....</p>

        <Link to="/contact">
          <button className="btn"> Contact </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="stack top">
            <img src={aboutMe} className="img" alt="true" />
          </div>
          <div className="stack bottom">
            <img src={aboutMe} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import { Link } from "react-router-dom";

import "../styles/AboutMe.css";
import aboutMe from "../assets/aboutMe.jpg";
import aboutMe2 from "../assets/aboutMe2.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>
          I'm a software engineer with a diverse set of skills and expertise in
          both front-end and back-end development. I am capable of building
          complete web applications from start to finish, including designing
          user interfaces, developing server-side APIs, and managing database
          interactions. I have a solid understanding of various programming
          languages and tools, such as HTML, CSS, JavaScript, Node.js, and
          React.{" "}
        </p>

        <Link to="/contact">
          <button className="btn"> Contact </button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="stack top">
            <img src={aboutMe2} className="img" alt="true" />
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

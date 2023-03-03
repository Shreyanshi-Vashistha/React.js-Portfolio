import "../styles/ProjectCards.css";
import proj1 from "../assets/proj1.jpg";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCards = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={proj1} alt="image" />
          <h2 className="title">Project Title</h2>
          <div className="details">
            <p>heya..</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>

              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;

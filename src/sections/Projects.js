import React, { Component } from "react";
import "./Projects.css";
import IndividProject from "./individ-project.js";
import insta from "./pics/insta.png";
import ecoasis from "./pics/ecoasis.png";
import cofed from "./pics/cofed.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-section" id="projects">
        <div className="title">projects</div>
        <div className="project-container">
          <div className="project-wrapper">
            <div>
              <ul className="project-items">
                <IndividProject
                  src={ecoasis}
                  link="https://github.com/Claire-Thib/ecoasis"
                  text="Ecoasis"
                  label="Website, Environmental, Educational"
                  languages="Javascript, HTML, CSS"
                />
                <IndividProject
                  src={cofed}
                  link="https://www.cofed.coop/"
                  text="CoFED"
                  label="Web, Co-op"
                  languages="React"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

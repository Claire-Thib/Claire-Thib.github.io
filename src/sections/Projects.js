import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Projects.css";
import IndividProject from "./individ-project.js";
import insta from "./pics/insta.png";
import ecoasis from "./pics/ecoasis.png";
import cofed from "./pics/cofed.png";

class Projects extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="projects-section" id="projects">
          <div className="title">projects</div>
          <div className="project-container">
            <div className="project-wrapper">
              <div>
                <ul className="project_items">
                  <IndividProject
                    src={ecoasis}
                    link="https://github.com/Claire-Thib/ecoasis"
                    text="Ecoasis"
                    label="Website, Environmental, Educational"
                  />
                  <IndividProject
                    src={cofed}
                    link="https://www.instagram.com"
                    text="CoFED"
                    label="Web, Co-op"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import resume from "./resume.pdf";
import me from "./pics/me.JPG";
import "./About.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-section" id="about">
        <div className="title">about me</div>
        <div className="intro-container">
          <img src={me} className="about-image" />

          <div>
            <div id="let-me">let me tell you about myself</div>
            <p id="introduction">
              I am a University of California, Berkeley undergraduate student in
              the class of 2024 with the intended computer science major. I am
              exploring all the different options in the tech industry at the
              moment to see what I will pursue in the future. I also have an
              interest in environmental science and the cross between computers
              and the environment
            </p>
          </div>
        </div>

        <div className="basic-info">
          <div className="inner-basic-info">
            <div>
              <b>Full Name: </b> Claire Thibodeaux
            </div>

            <div>
              <b>Email: </b> clairethibodeaux@berkeley.edu
            </div>

            <div>
              <b>Location: </b> Berkeley, California
            </div>
            <div>
              <b>Age: </b> 18
            </div>
          </div>
          <div>
            <button id="resume" onClick={() => window.open(resume, "_blank")}>
              Open Resume
            </button>
          </div>
        </div>
        {/* <button id= "resume" onClick={()=> window.open(resume, "_blank")}>Open Resume</button> */}
      </div>
    );
  }
}

export default About;

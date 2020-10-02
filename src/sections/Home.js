import React, { Component } from "react";
import github from "./pics/github.png";
import linkedin from "./pics/linkedin.png";
import insta from "./pics/insta.png";
import resume from "./resume.pdf";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home-section" id="home">
        <center>
          <div id="name">claire thibodeaux</div>

          <div id="aspiring">aspiring developer and engineer</div>
          <div>
            {/* <img src={github} className="logos" id="github" alt="github logo" /> */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Claire-Thib"
            >
              <img className="logos" src={github} />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/claire-thibodeaux-7882b0168/"
            >
              <img className="logos" src={linkedin} />{" "}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/claire.thx/"
            >
              <img className="logos" src={insta} />{" "}
            </a>
          </div>
        </center>
      </div>
    );
  }
}

export default Home;

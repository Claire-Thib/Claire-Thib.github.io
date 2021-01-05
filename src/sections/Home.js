import React from "react";
import github from "./pics/github.png";
import linkedin from "./pics/linkedin.png";
import insta from "./pics/insta.png";
import "./Home.css";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return (
    <div className="home-section" id="home">
      <center>
        <div id="name">claire thibodeaux</div>

        <div id="aspiring">aspiring developer and engineer</div>
        
        {width < 700 &&
        <div className="short-nav">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            about
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="experiences"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            experiences
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
          >
            projects
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={900}
          >
            contact
          </Link>
        </li>
      </ul>
    </div>
}

        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Claire-Thib"
          >
            <img className="logos" alt="Github Logo" src={github} />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/claire-thibodeaux-7882b0168/"
          >
            <img className="logos" alt="Linkedin Logo" src={linkedin} />{" "}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/claire.thx/"
          >
            <img className="logos" alt="Instagram Logo" src={insta} />{" "}
          </a>
        </div>

        <ScrollUpButton
          className="scroller"
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          style={{}}
          ToggledStyle={{}}
        />
      </center>
    </div>
  );
}

export default Home;

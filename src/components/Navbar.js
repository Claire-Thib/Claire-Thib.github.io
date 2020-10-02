import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

//credit: documentation of the navbar goes to James Quick at https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              home
            </Link>
          </li>

          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
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
              duration={500}
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
              duration={500}
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
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

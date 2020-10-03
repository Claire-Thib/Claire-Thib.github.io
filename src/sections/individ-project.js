import React from "react";

// credit to briancodex on github for his card code
// https://github.com/briancodex

function IndividProject(props) {
  return (
    <div className="projects-item">
      <a
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        <div className="project-info">
          <h5 className="project-text">{props.text}</h5>
        </div>
        <figure className="project-tags" data-category={props.label}>
          <img className="project-img" alt="Project Image" src={props.src} />
        </figure>
        <div className="instru">
          Project created using {props.languages} <br />
          Click on image to see more
        </div>
      </a>
    </div>
  );
}

export default IndividProject;

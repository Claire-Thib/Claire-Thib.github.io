import React from "react";
import "./Projects.css";

// credit/inspiration to briancodex on github for his card code
// https://github.com/briancodex

function IndividProject({ info }) {
  return (
    <div className="projects-item">
      <a
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
        href={info.link}
      >
        <div className="project-info">
          <h5 className="project-text">{info.Name}</h5>
        </div>
        <figure className="project-tags" data-category={info.label}>
          <img
            className="project-img"
            alt="Project Image"
            src={info.logo[0].url}
          />
        </figure>
        <div className="instru">
          <b>Languages: </b>{info.languages} <br />
          <br />
          <b> What: </b>{info.what}  <br />
        </div>
      </a>
    </div>
  );
}

export default IndividProject;

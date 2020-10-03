import React from "react";

// credit to briancodex on github for his card code
// https://github.com/briancodex

function IndividProject(props) {
  return (
    <>
      <li className="projects__item">
        <a
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
        >
          <div className="project_info">
            <h5 className="project_text">{props.text}</h5>
          </div>
          <figure className="project-tags" data-category={props.label}>
            <img className="project_img" alt="Project Image" src={props.src} />
          </figure>
        </a>
      </li>
    </>
  );
}

export default IndividProject;

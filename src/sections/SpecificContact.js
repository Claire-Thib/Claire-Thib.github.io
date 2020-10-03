import React from "react";
import "./Contact.css";

function SpecificContact(props) {
  return (
    <div className="contact-item">
      <a
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        <div className="contact-info">
          <img className="contact-img" alt="Contact Image" src={props.src} />
          <h5 className="contact-caption">{props.caption}</h5>
          <h5 className="contact-text">{props.text}</h5>
        </div>
      </a>
    </div>
  );
}

export default SpecificContact;

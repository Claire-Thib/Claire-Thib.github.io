import React from "react";
import "./Contact.css";

function SpecificContact(props) {
  return (
    // <div className="contact-item">
    //   <a
    //     className="contact-link"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     href={props.link}
    //   >
        <div className="contact-info">
          <img className="contact-img" alt="Contact Logos" src={props.src} />
          <div className="contact-caption">{props.caption}</div>
          <a className="contact-text"href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
        </div>
    //   </a>
    // </div>
  );
}

export default SpecificContact;

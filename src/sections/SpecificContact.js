import React from "react";

function SpecificContact(props) {
  return (
    <>
      <ul>
        <li className="contact_item">
          <a
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}
          >
            <div>
              <img
                className="contact_img"
                alt="Contact Image"
                src={props.src}
              />
            </div>
            <div className="contact_info">
              <h5 className="contact-caption">{props.caption}</h5>
              <h5 className="contact_text">{props.text}</h5>
            </div>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SpecificContact;

import React from "react";
import linkedin from "./pics/linkedin.png";
import email from "./pics/email.png";
import facebook from "./pics/facebook.png";
import "./Contact.css";
import SpecificContact from "./SpecificContact.js";

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-title">contact</div>
      <div className="contact-blurb">I would love to connect with you</div>
      <div className="contact-container">
        <SpecificContact
          src={email}
          link="mailto:clairethibodeaux@berkeley.edu"
          caption="Email Me At"
          text="clairethibodeaux@berkeley.edu"
        />
        <SpecificContact
          src={linkedin}
          link="https://www.linkedin.com/in/claire-thibodeaux-7882b0168/"
          caption="Find me On"
          text="LinkedIn Profile"
        />
        <SpecificContact
          src={facebook}
          link="https://www.facebook.com/profile.php?id=100009978990580"
          caption="Add me On"
          text="Facebook Profile"
        />
      </div>
      <div id="end-padding"></div>
    </div>
  );
}

export default Contact;

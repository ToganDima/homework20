import React from "react";
import "../contacts/Contact.css";
import manIcon from "../../images/man.png";
import womanIcon from "../../images/woman.png";
import naIcon from "../../images/na.png";

function Contact(props) {

  const iconSettings = {
    male: manIcon,
    female: womanIcon,
    notSpecified: naIcon,
  };

  return (
    <div className="contact">
      <div className="contact-logo">
        <img src={iconSettings[props.contactItem.gender]} alt="contact logo" />
      </div>
      <div className="contact-info">
        <div className="contact-ref">
          <span className="first-name">{props.contactItem.firstName}</span>
          <span className="last-name">{props.contactItem.lastName}</span>
        </div>
        <div className="phone-number">
          <span className="phone">{props.contactItem.phone}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

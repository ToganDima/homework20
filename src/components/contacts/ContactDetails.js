import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../contacts/ContactDetails.css";
import contactsArray from "../contacts/InitialContactsArray";
import manIcon from "../../images/man.png";
import womanIcon from "../../images/woman.png";
import naIcon from "../../images/na.png";
import arrowImg from "../../images/arrow-left.png";
import callImg from "../../images/call-icon.png";
import facetimeImg from "../../images/facetime-icon.png";
import mailImg from "../../images/mail-icon.png";
import messageImg from "../../images/message-icon.png";
import payImg from "../../images/pay-icon.png";

function ContactDetails() {
  const { username } = useParams();

  const firstLastName = username.split("_");
  const currentContact = contactsArray.filter((val) => {
    if (
      val.firstName === firstLastName[0] &&
      val.lastName === firstLastName[1]
    ) {
      return val;
    }
  });

  console.log(currentContact);

  let navigate = useNavigate();
  function backHandleClick() {
    navigate("/contacts");
  }

  const iconSettings = {
    male: manIcon,
    female: womanIcon,
    notSpecified: naIcon,
  };

  return (
    <div className="contact-details">
      <div className="details-back">
        <button className="back-btn" onClick={backHandleClick}>
          <img src={arrowImg} alt="back to conacts" />
          <span>Search</span>
        </button>
      </div>
      <div className="details-logo">
        <img src={iconSettings[currentContact[0].gender]} alt="contact logo" />
        <span>
          {currentContact[0].firstName} {currentContact[0].lastName}
        </span>
      </div>
      <div className="contact-actions">
        <div className="contact-action-box">
          <img src={messageImg} alt="send message" />
          <span>message</span>
        </div>
        <div className="contact-action-box">
          <img src={callImg} alt="call" />
          <span>call</span>
        </div>
        <div className="contact-action-box">
          <img src={facetimeImg} alt="face time" />
          <span>facetime</span>
        </div>
        <div className="contact-action-box">
          <img src={mailImg} alt="send imail" />
          <span>mail</span>
        </div>
        <div className="contact-action-box">
          <img src={payImg} alt="pay" />
          <span>pay</span>
        </div>
      </div>
      <div className="details-phones">
        <div className="d-mobile-phone">
          <span className="phone-label">mobile</span>
          <span className="phone-val">{currentContact[0].phone}</span>
        </div>
        <div className="d-home-phone">
          <span className="phone-label">home</span>
          <span className="phone-val">000-00-0000-00</span>
        </div>
      </div>
      <div className="details-email">
        <div className="d-email">
          <span className="email-label">email</span>
          <span className="email-val">examp@gmail.com</span>
        </div>
      </div>
      <div className="details-notes">
        <span>Notes</span>
      </div>
      <div className="details-block">
        <button id="block-btn">Block contact</button>
      </div>
    </div>
  );
}

export default ContactDetails;

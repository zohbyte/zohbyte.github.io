import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function Contact() {
  return (
    <ScrollReveal>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">
              {contactInfo.subtitle}
            </p>
            <div className="contact-text-div">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

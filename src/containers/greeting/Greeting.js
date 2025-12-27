import React from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import PronounsCard from "../../components/pronounsCard/PronounsCard";
import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="home">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <img
              alt="Zoey headshot"
              src={require("../../assets/images/zoey.png")}
            ></img>
            <a href="https://sammiportfolio.carrd.co/" target="_blank" rel="noopener noreferrer" className="image-credit">Art by sammiyammi</a>
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">Hi, I'm Zoey!</h1>
              <PronounsCard>
                <span className="greeting-pronouns">(she/her)</span>
              </PronounsCard>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="View my resume"
                    href={greeting.resumeLink}
                    newTab={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

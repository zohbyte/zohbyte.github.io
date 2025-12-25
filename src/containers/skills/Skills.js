import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <ScrollReveal>
      <div className="main" id="skills">
        <div className="skills-main-div">
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <ul className="skills-list">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <li key={i} className="subTitle skills-text">
                    {skills}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

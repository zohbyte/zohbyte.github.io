import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;

  return (
    <Headroom>
      <header className="header">
        <a href="/" className="logo">
          <span className="logo-terminal">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
          </li>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          <li>
            <a href="#projects">Projects</a>
          </li>
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className="experience-card">
      <div className="experience-text-details">
        {cardInfo.companylogo && (
          <div className="experience-logo-container">
            <img
              className="experience-logo"
              src={cardInfo.companylogo}
              alt={cardInfo.company}
            />
          </div>
        )}
        <h5 className="experience-text-company">{cardInfo.company}</h5>
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        <p className="subTitle experience-text-desc">{cardInfo.desc}</p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} />
        </ul>
        {cardInfo.links && cardInfo.links.length > 0 && (
          <div className="experience-links">
            {cardInfo.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

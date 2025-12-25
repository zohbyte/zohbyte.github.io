import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function WorkExperience() {
  if (workExperiences.display) {
    return (
      <ScrollReveal>
        <div id="experience">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experience</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={false}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        links: card.links
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    );
  }
  return null;
}

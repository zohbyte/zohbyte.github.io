import React from "react";
import "./Certifications.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {certificationSection} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function Certifications() {
  if (!certificationSection.display) {
    return null;
  }
  return (
    <ScrollReveal>
      <div className="main" id="certifications">
        <div className="certifications-main-div">
          <div className="certifications-header">
            <h1 className="heading certifications-heading">
              {certificationSection.title}
            </h1>
            {certificationSection.subtitle && (
              <p className="subTitle certifications-subtitle">
                {certificationSection.subtitle}
              </p>
            )}
          </div>
          <div className="certifications-cards-div">
            {certificationSection.certificationCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={false}
                  cardInfo={{
                    organization: card.organization,
                    achievements: card.achievements,
                    title: card.title,
                    description: card.description,
                    subtitle: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    iconComponent: card.iconComponent,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

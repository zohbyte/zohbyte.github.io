import React from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }
  return (
    <ScrollReveal>
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">
              {achievementSection.title}
            </h1>
            <p className="subTitle achievement-subtitle">
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
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

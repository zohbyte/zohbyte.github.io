import React, {useState, useEffect} from "react";
import "./RobloxGame.scss";
import ScrollReveal from "../../components/scrollReveal/ScrollReveal";
import ProjectCard from "../../components/projectCard/ProjectCard";
import {robloxGameSection} from "../../portfolio";

export default function RobloxGame() {
  const [gameStats, setGameStats] = useState(null);

  useEffect(() => {
    // Fetch game stats from Roblox API if universeId is available
    if (robloxGameSection.universeId) {
      fetch(
        `https://games.roblox.com/v1/games?universeIds=${robloxGameSection.universeId}`
      )
        .then(response => response.json())
        .then(data => {
          if (data.data && data.data.length > 0) {
            const game = data.data[0];
            setGameStats({
              visits: game.visits || 0,
              favorites: game.favoritedCount || 0,
              playing: game.playing || 0
            });
          }
        })
        .catch(error => {
          console.log("Could not fetch Roblox game stats:", error);
          // Stats will remain null if API fails
        });
    }
  }, []);

  if (!robloxGameSection.display) {
    return null;
  }

  const projects = robloxGameSection.projects || [
    {
      title: robloxGameSection.title,
      description: robloxGameSection.description,
      thumbnail: require("../../assets/images/squidthumbnail.png"),
      gameUrl: robloxGameSection.gameUrl,
      stats: gameStats
    }
  ];

  return (
    <ScrollReveal>
      <div className="main" id="projects">
        <div className="projects-main-div">
          <h1 className="projects-heading">Projects</h1>
          <div className="projects-container">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                projectInfo={{
                  title: project.title,
                  description: project.description,
                  thumbnail: project.thumbnail,
                  gameUrl: project.gameUrl || robloxGameSection.gameUrl,
                  stats: project.stats || gameStats
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

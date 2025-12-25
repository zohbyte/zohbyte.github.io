import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import Divider from "../components/divider/Divider";
import RobloxGame from "./robloxGame/RobloxGame";
import {skillsSection, educationInfo, workExperiences, achievementSection, robloxGameSection} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main-container">
      <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
        <>
          <Header />
          <Greeting />
          {skillsSection.display && <Divider />}
          <Skills />
          {educationInfo.display && <Divider />}
          <Education />
          {workExperiences.display && <Divider />}
          <WorkExperience />
          {robloxGameSection.display && <Divider />}
          <RobloxGame />
          {achievementSection.display && <Divider />}
          <Achievement />
          <Divider />
          <Profile />
          <Divider />
          <Footer />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;

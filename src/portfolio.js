/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {
  SiSharp,
  SiLua,
  SiRobloxstudio,
  SiPython,
  SiJavascript,
  SiGit,
  SiVmware,
  SiUnity
} from "react-icons/si";
import {ImTux} from "react-icons/im";
import {FaMicroscope, FaNetworkWired, FaVrCardboard} from "react-icons/fa";
import {TbFlagFilled} from "react-icons/tb";

// Summary And Greeting Section

const greeting = {
  username: "zohbyte",
  title: "Hi, I'm Zoey! \n (she/her)",
  subTitle: emoji(
    "Cybersecurity engineer, software developer, and technical leader with expertise spanning reverse engineering, digital forensics, secure software development, immersive technologies, and large-scale game infrastructure. I lead the XR Immersive Labs at the University of Maine at Augusta, run an independent game studio whose titles have reached millions of plays, and compete nationally in cybersecurity — most recently ranked 1st of 7,011 competitors in the National Cyber League (Enumeration & Exploitation Category)."
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1Nj_yG_-ofaOejQhL-w6RrxoIHJJJEA34?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zohbyte",
  linkedin: "https://www.linkedin.com/in/zohbyte/",
  gmail: "zoey@zohbyte.dev",
  discord: "https://discord.com/users/727645538190753863",
  roblox: "https://www.roblox.com/users/354594269/profile",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "Cybersecurity Engineering • Immersive (XR) Development • Technical Leadership",
  skills: [
    "Lead XR development in Unity, C#, OpenXR, and Meta XR — turning research and faculty requirements into production-ready immersive systems",
    "Perform digital forensics, reverse engineering, and incident response across memory, network, and disk artifacts",
    "Architect large-scale game infrastructure and server systems supporting millions of plays under sustained concurrent traffic",
    "Own product roadmaps, technical direction, and stakeholder relationships end to end as sole technical lead",
    "Penetration testing, network enumeration, and exploitation at a nationally ranked competitive level",
    "Mentor and onboard developers, including building and running an internship pipeline from the ground up"
  ],

  softwareSkills: [
    {skillName: "Python", iconComponent: <SiPython />},
    {skillName: "Lua / Luau", iconComponent: <SiLua />},
    {skillName: "C#", iconComponent: <SiSharp />},
    {skillName: "JavaScript", iconComponent: <SiJavascript />},
    {skillName: "Unity", iconComponent: <SiUnity />},
    {skillName: "Roblox Development", iconComponent: <SiRobloxstudio />},
    {skillName: "OpenXR / Meta XR", iconComponent: <FaVrCardboard />},
    {skillName: "Digital Forensics", iconComponent: <FaMicroscope />},
    {
      skillName: "Reverse Engineering",
      iconComponent: <TbFlagFilled />
    },
    {skillName: "Network Security", iconComponent: <FaNetworkWired />},
    {skillName: "Linux", iconComponent: <ImTux />},
    {
      skillName: "Virtualization (VMware)",
      iconComponent: <SiVmware />
    },
    {
      skillName: "Git / Version Control",
      iconComponent: <SiGit />
    }
  ],

  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Maine at Augusta",
      logo: require("./assets/images/uma.png"),
      subHeader:
        "B.S. in Cybersecurity & Computer Information Systems — Honors",
      duration: "September 2022 - Present",
      desc: "Honors student recognized on the President's List and Dean's List while working in applied cybersecurity roles across the university.",
      descBullets: [
        "President's List and Dean's List",
        "Taught undergraduate and graduate cybersecurity labs through the Maine Cyber Range",
        "Led the university CTF team to a school-record national finish"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "XR Immersive Labs Lead",
      company: "University of Maine at Augusta",
      companylogo: require("./assets/images/uma.png"),
      date: "July 2026 – Present",
      desc: "Sole technical owner of the immersive lab's codebase and platform architecture. Author of the lab's PRD, setting scope, priorities, and technical direction for institution-wide XR initiatives from the ground up.",
      descBullets: [
        "Lead development in Unity, C#, Python, JavaScript, OpenXR, and Meta XR, turning faculty and research requirements into production-ready immersive systems",
        "Serve as the primary technical point of contact for faculty, administrators, and university leadership",
        "Built and run the lab's internship pipeline — sourcing, scoping, and onboarding student developers, with responsibility for their ongoing mentorship and growth"
      ]
    },
    {
      role: "Founder & Technical Lead",
      company: "Zohbyte Games",
      companylogo: require("./assets/images/zoey.png"),
      date: "July 2025 – Present",
      desc: "Founded and lead an independent Roblox game development studio whose titles have collectively been played by millions of players. Direct long-term technical strategy, deployment pipeline, and platform architecture for all studio titles.",
      descBullets: [
        "Design and maintain high-performance server and gameplay systems supporting large, sustained concurrent player bases",
        "Build internal tools and automation that streamline development workflows across the studio",
        "Optimize networking, scalability, and runtime performance to keep live experiences stable under heavy traffic"
      ]
    },
    {
      role: "Student Tech Hub Navigator",
      company: "University of Maine at Augusta",
      companylogo: require("./assets/images/uma.png"),
      date: "Sep 2025 – Present",
      desc: "Provide front-line technical support to students, resolving hardware, software, networking, and account issues across a diverse university computing environment."
    },
    {
      role: "Forensics Specialist",
      company: "Squid Proxy Lovers",
      companylogo: require("./assets/images/spl.png"),
      date: "Jan 2025 – Present",
      desc: "Forensics specialist on a top-20 global Capture the Flag team, specializing in memory forensics, network traffic analysis, reverse engineering, and digital evidence recovery.",
      links: [
        {text: "spl.team", url: "https://spl.team"},
        {text: "CTFTime", url: "https://ctftime.org/team/222966"}
      ]
    },
    {
      role: "Cybersecurity Researcher & Range Operator",
      company: "Maine Cyber Range",
      companylogo: require("./assets/images/mcr.png"),
      date: "Oct 2023 – May 2025",
      desc: "Conducted applied cybersecurity research supporting municipal and government security initiatives, and designed and delivered hands-on instruction using the Maine Cyber Range.",
      descBullets: [
        "Developed realistic attack simulations and educational materials to improve organizational security awareness and defensive capabilities",
        "Taught undergraduate and graduate students practical skills in digital forensics, network defense, and offensive security"
      ]
    },
    {
      role: "Team Captain",
      company: "Cyber Moose",
      companylogo: require("./assets/images/cybermooselogo.png"),
      date: "Sep 2022 – Dec 2024",
      desc: "Joined the university cybersecurity team as a competitor and was selected to lead the organization — coordinating training, mentoring members, and preparing teams for national cybersecurity competitions, including a school-record 25th-place national finish."
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements "),
  subtitle: "",

  achievementsCards: [
    {
      organization: "National Cyber League",
      achievements: "1st of 7,011 — Enumeration & Exploitation",
      description:
        "Ranked 1st of 7,011 competitors nationally in the Spring 2026 National Cyber League Enumeration & Exploitation category, solving every challenge with 100% accuracy.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    },
    {
      organization: "Wicked6",
      achievements: "3rd Place",
      description:
        "Led the team to 3rd place in the 2026 Wicked6 International Attack/Defense competition, finishing behind only the U.S. and European national teams, and earned Most First Bloods for the fastest successful exploits across the competition's services.",
      image: require("./assets/images/wicked6-light-ex-sm.png"),
      imageAlt: "Wicked6 Cyber Games Logo",
      footerLink: []
    },
    {
      organization: "National Cyber League",
      achievements: "2nd of 7,876 — Enumeration & Exploitation",
      description:
        "Ranked 2nd of 7,876 competitors in the Fall 2025 National Cyber League Enumeration & Exploitation category with 100% challenge completion.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    },
    {
      organization: "National Cyber League",
      achievements: "2nd of 8,575 — Digital Forensics",
      description:
        "Ranked 2nd of 8,575 competitors in the Spring 2025 National Cyber League Digital Forensics category with 100% challenge completion.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    },
    {
      organization: "Zohbyte Games",
      achievements: "3+ Million Visits / 45,354 Peak DAU",
      description:
        "Grew Squid Game with NPCs past 3 million visits with a peak of 45,354 daily active users, backed by scalable server architecture and live operations.",
      iconComponent: <SiRobloxstudio />,
      imageAlt: "Roblox Logo",
      footerLink: []
    },
    {
      organization: "US Cyber Games",
      achievements: "Combine & Pipeline (Seasons IV–VI)",
      description:
        "Selected for the US Cyber Combine and US Cyber Pipeline across Seasons IV–VI, training in offensive security, digital forensics, reverse engineering, and defensive operations.",
      image: require("./assets/images/uscg.png"),
      imageAlt: "US Cyber Games Logo",
      footerLink: []
    },
    {
      organization: "National Cyber League",
      achievements: "Diamond Division (2023–2026)",
      description:
        "Consistently ranked in the Diamond Division of the National Cyber League from 2023 through 2026, demonstrating sustained top-tier performance in competitive cybersecurity.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Certifications Section

const certificationSection = {
  title: "Certifications",
  subtitle: "",

  certificationCards: [
    {
      organization: "GFACT",
      achievements: "GIAC Certifications",
      description: "Issued July 2026",
      image: require("./assets/images/gfact.png"),
      imageAlt: "GIAC GFACT Certification Badge",
      footerLink: []
    }
    // Add more certifications here as you earn them
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume for a full overview of my experience",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Open to professional opportunities and collaborations — email is the best way to reach me.",
  number: "+1 207-631-9722",
  email_address: "zoey@zohbyte.dev"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Roblox Game Section
const robloxGameSection = {
  title: "[Alpha] Squid Game with NPCs",
  subtitle: "Flagship Title from Zohbyte Games",
  description:
    "An immersive Roblox experience featuring the classic Squid Game challenges with AI-driven NPCs. As founder and technical lead of Zohbyte Games, I own the architecture, performance, and live operations behind this title, which has surpassed 3 million visits.",
  gameUrl: "https://www.roblox.com/games/101390204205517/Squid-Game-with-NPCs",
  universeId: 7276011284, // Universe ID for API stats fetching
  placeId: 101390204205517, // Place ID
  projects: [
    {
      title: "[Alpha] Squid Game with NPCs",
      description:
        "An immersive Roblox experience featuring the classic Squid Game challenges with AI-driven NPCs. As founder and technical lead of Zohbyte Games, I own the architecture, performance, and live operations behind this title, which has surpassed 3 million visits.",
      thumbnail: require("./assets/images/squidthumbnail.png"),
      gameUrl:
        "https://www.roblox.com/games/101390204205517/Squid-Game-with-NPCs"
    }
    // Add more projects here for carousel/multiple games
  ],
  display: true // Set false to hide this section
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  certificationSection,
  contactInfo,
  isHireable,
  resumeSection,
  robloxGameSection
};

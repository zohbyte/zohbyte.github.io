/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import { 
  SiCplusplus, 
  SiLua, 
  SiRobloxstudio,
  SiRoblox,
  SiPython, 
  SiJavascript,
  SiGit,
  SiVmware
} from "react-icons/si";
import { ImTux } from "react-icons/im";
import { FaMicroscope, FaServer, FaChalkboardTeacher, FaNetworkWired } from "react-icons/fa";
import { TbFlagFilled } from "react-icons/tb";

// Summary And Greeting Section

const greeting = {
  username: "zohbyte",
  title: "Hi, I'm Zoey! \n (she/her)",
  subTitle: emoji(
    "I am a cybersecurity enthusiast and a self-taught game developer. I love working on miscellaneous projects that force me to expand upon my skills. I also participate in the competitive side of cybersecurity, my main focus is Forensics."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lk3W_0dvNySIg6VFQ2TBglt0zGEhOyUX/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "Cybersecurity • Digital Forensics • Game & Software Development",
  skills: [
    "Build scalable Roblox/Luau game systems supporting thousands of concurrent players",
    "Perform digital forensics and incident response including memory, network, and disk analysis",
    "Develop secure scripts, automation tools, and backend services in Lua + Python",
    "Create simulated cyber range environments and teach advanced cybersecurity concepts",
    "Penetration testing, network enumeration, exploitation, and CTF problem solving",
    "IT troubleshooting, virtualization management, and student technical support"
  ],

  softwareSkills: [
    {skillName: "Lua / Luau", iconComponent: <SiLua />},
    {skillName: "Python", iconComponent: <SiPython />},
    {skillName: "JavaScript (basic)", iconComponent: <SiJavascript />},
    {skillName: "C++ (basic)", iconComponent: <SiCplusplus />},
    {skillName: "Roblox Development", iconComponent: <SiRobloxstudio />},
    {skillName: "Digital Forensics", iconComponent: <FaMicroscope />},
    {
      skillName: "CTF / Offensive Security",
      iconComponent: <TbFlagFilled />
    },
    {skillName: "Linux", iconComponent: <ImTux />},
    {skillName: "Wireshark", iconComponent: <FaNetworkWired />},
    {
      skillName: "Virtualization (VMware)",
      iconComponent: <SiVmware />
    },
    {
      skillName: "Git / Version Control",
      iconComponent: <SiGit />
    },
    {
      skillName: "Teaching & Leadership",
      iconComponent: <FaChalkboardTeacher />
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
        "Bachelors of Science in Cybersecurity and Computer Informations Systems",
      duration: "September 2022 - Present",
      desc: "Participated in the undergraduate research, taught cybersecurity labs, and ran the CTF team.",
      descBullets: [
        "Led a CTF team to 25th in the National Cyber League (School Record)",
        "Taught Junior / Senior level cybersecurity labs as a Freshman",
        "Advised Maine Municipalites on cybersecurity and built live-attack demonstrations on virtual replicated infrastructures"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Technical Lead / Owner",
      company: "Zohbyte Games",
      companylogo: require("./assets/images/zoey.png"),
      date: "July 2025 – Present",
      desc: "Oversee development across all studio projects while serving as the lead developer. Leverage deep experience with the Roblox platform and proficiency in Luau to create high-quality, scalable & engaging game experiences. Responsible for core system architecture, performance optimization, and deployment of live game environments."
    },
    {
      role: "Tech Hub Navigator",
      company: "University of Maine at Augusta",
      companylogo: require("./assets/images/uma.png"),
      date: "Sep 2025 – Present",
      desc: "Serve as a friendly and accessible point of contact for students seeking technical support. Provide hands-on assistance with hardware, software, and network issues within a collaborative, student-centered environment."
    },
    {
      role: "Forensics",
      company: "Squid Proxy Lovers",
      companylogo: require("./assets/images/spl.png"),
      date: "Jan 2025 – Present",
      desc: "I participate in cybersecurity competitions with my team, serving as a forensics specialist. Squid Proxy Lovers is a top 25 team globally on CTFTime.",
      links: [
        {text: "spl.team", url: "https://spl.team"},
        {text: "CTFTime", url: "https://ctftime.org/team/222966"}
      ]
    },
    {
      role: "Student Researcher & Lab Instructor",
      company: "Maine Cyber Range",
      companylogo: require("./assets/images/mcr.png"),
      date: "Oct 2023 – May 2025",
      desc: "Taught advanced cybersecurity concepts to undergraduate and graduate students through hands-on labs on a virtual cyber range, facilitating experiential learning in network defense, penetration testing, and digital forensics. Collaborated with student researchers to advise local governments across Maine on strengthening their security posture, and developed real-world simulated scenarios to demonstrate the impact of effective cybersecurity practices."
    },
    {
      role: "Player / Team Captain",
      company: "Cyber Moose",
      companylogo: require("./assets/images/cybermooselogo.png"),
      date: "Sep 2022 – Jan 2025",
      desc: "Originally joined as a player in the National Cyber League competitions, quickly advancing to team captain due to strong performance and leadership skills. Led the team to achieve a school-record 25th place nationally by coordinating practice sessions, developing strategies, and fostering collaboration among team members."
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
      achievements: "Forensics 2nd out of 8575",
      description:
        "I achieved second place in the Forensics category during the Spring 2025 National Cyber League competition, demonstrating exceptional skills in digital forensics.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    },
    {
      organization: "National Cyber League",
      achievements: "Enumerate & Exploit 2nd out of 7876",
      description:
        "I achieved second place in the Enumeration & Exploitation category during the Fall 2025 National Cyber League competition, showcasing strong abilities in identifying and exploiting system vulnerabilities.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    },
    {
      organization: "Squid Games with NPCS",
      achievements: "3+ Million Visits / 45,354 Peak DAU",
      description:
        "Achieved over 3 million visits for NPC Squid Games, with a peak daily active user count of 45,354, demonstrating strong game development and player engagement skills.",
      iconComponent: <SiRobloxstudio />,
      imageAlt: "Roblox Logo",
      footerLink: []
    },
    {
      organization: "US Cyber Games",
      achievements: "Combine & Pipeline (Season IV & V)",
      description:
        "I was selected for both the combine and pipeline programs of the US Cyber Games in Seasons IV & V, highlighting my dedication and skill in the field of cybersecurity.",
      image: require("./assets/images/uscg.png"),
      imageAlt: "US Cyber Games Logo",
      footerLink: []
    },
    {
      organization: "National Cyber League",
      achievements: "Diamond Rating",
      description:
        "Consistently maintained a Diamond I-III ranking in the National Cyber League competitions, showcasing advanced skills in cybersecurity and problem-solving.",
      image: require("./assets/images/ncl.png"),
      imageAlt: "National Cyber League Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discord is the best contact method, for professional inquiries use email.",
  number: "+1 207-631-9722",
  email_address: "zoey@zohbyte.dev"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Roblox Game Section
const robloxGameSection = {
  title: "[Alpha] Squid Game with NPCs",
  subtitle: "My Most Popular Roblox Game",
  description:
    "An immersive Roblox experience featuring the classic Squid Game challenges with AI-driven NPCs. Lead development and design for this popular game that has attracted thousands of players.",
  gameUrl: "https://www.roblox.com/games/101390204205517/Squid-Game-with-NPCs",
  universeId: 7276011284, // Universe ID for API stats fetching
  placeId: 101390204205517, // Place ID
  projects: [
    {
      title: "[Alpha] Squid Game with NPCs",
      description:
        "An immersive Roblox experience featuring the classic Squid Game challenges with AI-driven NPCs. Lead development and design for this popular game that has attracted thousands of players.",
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
  contactInfo,
  isHireable,
  resumeSection,
  robloxGameSection
};

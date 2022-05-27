import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectArray = [
  {
    projectName: "MyWatchList",
    techStack: ["HTML", "CSS", "Javascript", "API"],
    projectDesc:
      "I created this project as solution to one of my personal frustrations as I often forget the name of movie or show that I wanted to watch. Built using vanilla Javascript, it connects both the IMDB and Jikan API to combine all the media that I am interested in into one place.",
    githubLink: "https://github.com/jonathancklee1/Watch-List-Site",
    liveSiteLink: "https://jonathancklee1.github.io/Watch-List-Site/",
    projectImgPath: "mwl-sc.png",
  },
  {
    projectName: "Weather and Study Companion",
    techStack: ["HTML", "CSS", "Javascript", "API"],
    projectDesc:
      "A combination of a weather app and a pomodoro timer for study to improve productivity. This project allowed me to use the fundamental skills I have learnt so far into one application",
    githubLink: "https://github.com/jonathancklee1/weather-app",
    liveSiteLink: "https://confident-tesla-4709ee.netlify.app/",
    projectImgPath: "weather-comp-sc.png",
  },
  {
    projectName: "Tenzies Game",
    techStack: ["React", "SASS"],
    projectDesc:
      "A tenzies game inspired by Scrimba's Beginner React course. Added additional functionalities and changed aesthetics of the website to further synthesise my learning",
    githubLink: "https://github.com/jonathancklee1/tenzies-game",
    liveSiteLink: "https://jonathancklee1.github.io/tenzies-game/",
    projectImgPath: "tenzies-sc.png",
  },
  {
    projectName: "Covid-19 Tracker",
    techStack: ["HTML", "CSS", "Javascript", "API"],
    projectDesc:
      "Built using the Covid-19 API, this project aims to provide a solution for viewing important coronavirus-related data for countries during the current pandemic.",
    githubLink: "https://github.com/jonathancklee1/Covid19-Tracker",
    liveSiteLink: "https://compassionate-sinoussi-22dfa0.netlify.app/",
    projectImgPath: "covid-tracker-sc.png",
  },
  {
    projectName: "Covid-19 Screening App",
    techStack: ["Java", "XML", "Firebase"],
    projectDesc: "Dec 2021",
    githubLink:
      "https://www.credly.com/badges/4d1b42ff-a73c-40e9-86e8-6a27aec09ccf",
    liveSiteLink: "excel-cert.png",
    projectImgPath: "ca-cert.png",
  },
];

const projectComponents = projectArray.map((projectArray) => {
  return (
    <ProjectCard
      key={projectArray.projectName}
      projectName={projectArray.projectName}
      techStack={projectArray.techStack}
      projectDesc={projectArray.projectDesc}
      credLink={projectArray.credLink}
      projectImgPath={projectArray.projectImgPath}
    />
  );
});
export default function ProjectSection() {
  return (
    <section className="section projects-section" id="projectSection">
      <h2>Projects</h2>
      <h3>
        Here are some projects I have created along my web development and
        programming journey.
      </h3>
      <div className="projects-container">{projectComponents}</div>
    </section>
  );
}

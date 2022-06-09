import React from "react";
import ProjectCard from "../components/ProjectCard";
import projectArray from "../data/projectsData";

const projectComponents = projectArray.map((projectArray) => {
  return (
    <ProjectCard
      key={projectArray.projectName}
      projectName={projectArray.projectName}
      techStack={projectArray.techStack}
      projectDesc={projectArray.projectDesc}
      githubLink={projectArray.githubLink}
      liveSiteLink={projectArray.liveSiteLink}
      figmaLink={projectArray.figmaLink}
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

import React from "react";

export default function ProjectCard(props) {
  const techStackArray = props.techStack;

  const techItems = techStackArray.map((tech) => {
    return (
      <span key={tech} className="tech-tag">
        {tech}
      </span>
    );
  });
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="project-card">
      <div className="project-card--outer">
        <div
          className="project-card--inner"
          style={{
            backgroundImage: `url(${require(`../assets/img/${props.projectImgPath}`)})`,
          }}
        >
          <div className="project-overview">
            <div className="project-show-more-arrow"></div>
            <div className="project-skills">{techItems}</div>
            <div className="project-description">
              <p>{props.projectDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button
          className="project-btn"
          onClick={() => openInNewTab(props.githubLink)}
        >
          Github
        </button>
        <button
          className="project-btn"
          onClick={() => openInNewTab(props.liveSiteLink)}
        >
          Live Site
        </button>
      </div>
      <h4>{props.projectName}</h4>
    </div>
  );
}

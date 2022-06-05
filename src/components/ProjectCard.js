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
        <div className="project-card--inner">
          <img
            className="project-img"
            src={require(`../assets/img/${props.projectImgPath}`)}
          ></img>
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
        {props.githubLink && props.liveSiteLink ? (
          <>
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
          </>
        ) : (
          <button
            className="project-btn"
            onClick={() => openInNewTab(props.figmaLink)}
          >
            Figma
          </button>
        )}
      </div>
      <h4>{props.projectName}</h4>
    </div>
  );
}

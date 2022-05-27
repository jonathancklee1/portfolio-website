import React from "react";

export default function ProjectCard(props) {
  const techStackArray = props.techStack;

  const techItems = techStackArray.map((tech) => {
    return <span className="tech-tag">{tech}</span>;
  });

  return (
    <div className="project-card">
      <div className="project-card--outer">
        <div
          className="project-card--inner"
          style={{
            backgroundImage: `url(${require(`../assets/img/${props.projectImgPath}`)})`,
          }}
        >
          <div className="button-wrapper">
            <button className="project-btn">Github</button>
            <button className="project-btn">Live Site</button>
          </div>
          <div className="project-overview">
            <div className="project-show-more-arrow"></div>
            <div className="project-skills">{techItems}</div>
            <div className="project-description">
              <p>{props.projectDesc}</p>
            </div>
          </div>
        </div>
      </div>
      <h4>{props.projectName}</h4>
    </div>
  );
}

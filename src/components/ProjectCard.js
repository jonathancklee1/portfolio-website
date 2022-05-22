import React from "react";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card--outer">
        <div className="project-card--inner">
          <div className="button-wrapper">
            <button className="project-btn">Github</button>
            <button className="project-btn">Live Site</button>
          </div>
          <div className="project-overview">
            <div className="project-show-more-arrow"></div>
            <div className="project-skills">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="project-description">
              <p>
                lorem lorem loremlorem lorem loremlo remlor emlo remlo remlorem lorem
                lorem lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4>Project Name</h4>
    </div>
  );
}

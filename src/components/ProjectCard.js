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
            <div className="project-skills">
              <span>HTML</span>
              <span>CSS</span>
            </div>
            <div className="project-description">
              <p>
                loremloremloremloremloremloremloremloremloremloremlorem lorem
                lorem lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2>Project Name</h2>
    </div>
  );
}

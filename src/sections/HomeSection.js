import React from "react";
import Typical from "react-typical";
export default function HomeSection() {
  return (
    <section className="section home-section" id="homeSection">
      <div className="home-text-wrapper">
        <h1>
          Hi, I'm <span className="name-text">Jonathan</span>
        </h1>
        <Typical
          steps={[
            "Information Systems Graduate",
            3000,
            "Aspiring Front-end Web Developer",
            3000,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
        {/* <h2>Information Systems Graduate</h2> */}
        <p>Welcome to my portfolio website!</p>
      </div>
      <button className="resume-btn">Download Resume</button>
    </section>
  );
}

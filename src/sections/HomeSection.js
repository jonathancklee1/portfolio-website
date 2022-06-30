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
            4000,
            "Aspiring Front-end Developer",
            4000,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
        <p>Welcome to my portfolio website!</p>
      </div>
      <a
        className="resume-btn"
        href={require("../assets/documents/Jonathan-Lee-Resume.pdf")}
        download="Jonathan-Lee-Resume"
        // onClick="window.open('../assets/documents/Jonathan-Lee-Resume.pdf')"
        // href="../assets/documents/Jonathan-Lee-Resume.pdf"
        // download="Jonathan-Lee-Resume"
      >
        Download Resume
      </a>
    </section>
  );
}

import React from "react";
import SkillTab from "../components/SkillTab";
import CertCard from "../components/CertCard";
import devSkillArray from "../data/devSkillsData";
import miscSkillArray from "../data/miscSkillsData";
import certArray from "../data/certsData";
export default function SkillSection() {
  const devSkillComponents = devSkillArray.map((skillArray) => {
    return <SkillTab key={skillArray.skill} skillArray={skillArray} />;
  });
  const miscSkillComponents = miscSkillArray.map((skillArray) => {
    return <SkillTab key={skillArray.skill} skillArray={skillArray} />;
  });

  const certCardComponents = certArray.map((cert) => {
    return (
      <CertCard
        key={cert.certName}
        certName={cert.certName}
        issuer={cert.issuer}
        issueDate={cert.issueDate}
        credLink={cert.credLink}
        certImgPath={cert.certImgPath}
      />
    );
  });

  return (
    <section className="section skills-section" id="skillsSection">
      <section className="skills-container">
        <h2>Skills</h2>
        <div className="skill-card-wrapper">
          <div className="skill-card">
            <h3>Development Skills</h3>
            <div className="skill-tab-wrapper">{devSkillComponents}</div>
          </div>
          <div className="skill-card">
            <h3>Miscellaneous Skills</h3>
            <div className="skill-tab-wrapper">{miscSkillComponents}</div>
          </div>
        </div>
      </section>
      <section className="cert-container">
        <h2>Certification</h2>
        <div className="cert-card-wrapper">{certCardComponents}</div>
      </section>
    </section>
  );
}

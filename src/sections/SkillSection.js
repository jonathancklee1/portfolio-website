import React from "react";
import SkillTab from "../components/SkillTab";
import CertCard from "../components/CertCard";
export default function SkillSection() {
  const devSkillArray = [
    { skill: "html5", iconPath: "html.png" },
    { skill: "css3", iconPath: "css.png" },
    { skill: "javascript", iconPath: "js.png" },
    { skill: "react", iconPath: "react.png" },
    { skill: "sass", iconPath: "sass.png" },
    { skill: "java", iconPath: "java.png" },
    { skill: "github", iconPath: "github.png" },
    { skill: "sql", iconPath: "sql.png" },
  ];
  const miscSkillArray = [
    { skill: "agile scrum", iconPath: "agile.png" },
    { skill: "figma", iconPath: "figma.png" },
    { skill: "sas", iconPath: "sas.png" },
    { skill: "ms suite", iconPath: "ms.png" },
  ];
  const certArray = [
    {
      certName: "Career Accelerator: Essentials",
      issuer: "UNSW Business School",
      issueDate: "Feb 2022",
      credLink:
        "https://www.credly.com/badges/b99c5484-1168-415a-89d3-61edcec19aa9",
      certImgPath: "ca-cert.png",
    },
    {
      certName: "SAS: Business Analytics",
      issuer: "UNSW Business School",
      issueDate: "Jan 2022",
      credLink:
        "https://www.credly.com/badges/e86ced93-3c85-4255-833b-af6fc1ee1f48",
      certImgPath: "sas-cert.png",
    },
    {
      certName: "Microsoft Excel",
      issuer: "Microsoft",
      issueDate: "Dec 2021",
      credLink:
        "https://www.credly.com/badges/4d1b42ff-a73c-40e9-86e8-6a27aec09ccf",
      certImgPath: "excel-cert.png",
    },
  ];

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

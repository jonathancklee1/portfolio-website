import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";
import ProjectCard from "./components/ProjectCard";
import SkillTab from "./components/SkillTab";

function App() {
  const devSkillArray = [
    "html5",
    "css3",
    "javascript",
    "react",
    "sass",
    "java",
    "git/github",
    "sql",
  ];
  const miscSkillArray = ["agile scrum", "figma", "ms suite", "sas"];
  const devSkillComponents = devSkillArray.map((skill) => {
    return <SkillTab key={skill} skill={skill} />;
  });
  const miscSkillComponents = miscSkillArray.map((skill) => {
    return <SkillTab key={skill} skill={skill} />;
  });
  return (
    <div className="App">
      <SideNav />
      <MobileHeader />
      <main>
        <section className="section about-me-section">
          <div className="about-me-text-wrapper">
            <h1>Hi, I'm Jonathan Lee</h1>
            <h2>Information Systems Graduate</h2>
            <p>Welcome to my portfolio website!</p>
          </div>
          <button className="resume-btn">Download Resume</button>
        </section>
        <section className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        <section className="section skills-section">
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
            <div className="cert-card-wrapper">
              <div className="cert-card"></div>
              <div className="cert-card"></div>
              <div className="cert-card"></div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

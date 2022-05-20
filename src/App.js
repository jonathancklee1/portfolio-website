import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";
import ProjectCard from "./components/ProjectCard";
import SkillTab from "./components/SkillTab";
import CertCard from "./components/CertCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
  const certArray = [
    {
      certName: "Career Accelerator: Essentials",
      issuer: "UNSW Business School",
      issueDate: "Jan 2022",
      credLink: "",
    },
    {
      certName: "SAS: Business Analytics",
      issuer: "UNSW Business School",
      issueDate: "Jan 2022",
      credLink: "",
    },
    {
      certName: "Microsoft Excel",
      issuer: "Microsoft",
      issueDate: "Dec 2021",
      credLink: "",
    },
  ];
  const devSkillComponents = devSkillArray.map((skill) => {
    return <SkillTab key={skill} skill={skill} />;
  });
  const miscSkillComponents = miscSkillArray.map((skill) => {
    return <SkillTab key={skill} skill={skill} />;
  });
  const certCardComponents = certArray.map((cert) => {
    return (
      <CertCard
        key={cert}
        certName={cert.certName}
        issuer={cert.issuer}
        issueDate={cert.issueDate}
        credLink={cert.credLink}
      />
    );
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
            <div className="cert-card-wrapper">{certCardComponents}</div>
          </section>
        </section>

        <section className="section contact-section">
          <h2>Contact Me</h2>
          <div className="socials-container">
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="contact-form">
            <label>Please feel free to contact me through this form! </label>
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  ></input>
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    className="submit-btn"
                    type="submit"
                    value="send"
                  ></input>
                </li>
              </ul>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

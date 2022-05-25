import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";
import ProjectCard from "./components/ProjectCard";
import SkillTab from "./components/SkillTab";
import CertCard from "./components/CertCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";

function App() {
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
        key={cert}
        certName={cert.certName}
        issuer={cert.issuer}
        issueDate={cert.issueDate}
        credLink={cert.credLink}
        certImgPath={cert.certImgPath}
      />
    );
  });

  return (
    <div className="App">
      <SideNav />
      <MobileHeader />
      <main>
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

        <section className="section about-me-section" id="aboutSection">
          <h2>Profile</h2>
          <p className="profile-blurb">
            Technology has always surrounded me growing up whether it be
            exploring cool websites on my old home computer or receiving my
            first Nintendo console for my birthday. It was through my studies
            when I discovered the expansive nature of the internet and found
            myself exploring web development.
          </p>
          <div className="profile-card">
            <img
              src={require("./assets/img/stat-bars.png")}
              className="stat-bar-img"
            ></img>
            <div className="profile-content">
              <h4 className="border-bottom-green">Stats</h4>
              <p>
                Name: <span>Jonathan Lee</span>
              </p>
              <p>
                Location: <span>Sydney</span>
              </p>
              <p>
                Languages: <span>English, Cantonese</span>
              </p>
              <p>
                Part-time Job: <span>Academic tutor</span>
              </p>
              <p>
                Favourite TV-show: <span>The Haunting of Hill House</span>
              </p>
              <p>
                Favourite Band: <span>Gunship</span>
              </p>
              <p>
                Fun Facts:{" "}
                <span>
                  Learnt how to play guitar and chess over the pandemic, nearly
                  died on a ski trip.
                </span>
              </p>
            </div>
          </div>
          <h2>Education</h2>
          <div className="education-wrapper">
            <div>
              <h4>Bachelor of Information Systems</h4>
              <p>February 2019 - May 2022</p>
              <p>University of New South Wales (UNSW)</p>
            </div>
            <div>
              <h4>Relevant Coursework</h4>
              <ul>
                <li>
                  <p>
                    <span className="green"> {">"} </span> Business Programming
                  </p>
                </li>
                <li>
                  <p>
                    <span className="green"> {">"} </span>Mobile Application
                    Development
                  </p>
                </li>
                <li>
                  <p>
                    <span className="green"> {">"} </span>Networking {"&"} Cyber
                    Security
                  </p>
                </li>
                <li>
                  <p>
                    <span className="green"> {">"} </span>Database Management{" "}
                    {"&"} Big Data Infrastructures
                  </p>
                </li>
                <li>
                  <p>
                    <span className="green"> {">"} </span>Information Systems
                    Innovation {"&"} Transformation
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section projects-section" id="projectSection">
          <h2>Projects</h2>
          <h3>
            Here are some projects I have created along my web development
            journey.
          </h3>
          <div className="projects-container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

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

        <section className="section contact-section" id="contactSection">
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

import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <SideNav />
      <MobileHeader />
      <main>
        <section className="section about-me-section">
          <div className="about-me-text__wrapper">
            <h1>Hi, I'm Jonathan Lee</h1>
            <h2>Information Systems Graduate</h2>
            <p>Welcome to my portfolio website!</p>
          </div>
          {/* <button className="resume-btn">Resume</button> */}
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
      </main>
    </div>
  );
}

export default App;

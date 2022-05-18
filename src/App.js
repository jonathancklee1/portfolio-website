import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";

function App() {
  return (
    <div className="App">
      <SideNav />
      <MobileHeader />
      <main>
        <section className="about-me">
          <div className="about-me-text__wrapper">
            <h1>Hi, I'm Jonathan Lee</h1>
            <h2>Information Systems Graduate</h2>
            <p>Welcome to my portfolio website!</p>
          </div>
          {/* <button className="resume-btn">Resume</button> */}
        </section>
        <section className="about-me">
          <h1>Hi, I'm Jonathan Lee</h1>
        </section>
      </main>
    </div>
  );
}

export default App;

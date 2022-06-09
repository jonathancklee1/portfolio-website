import "./styles/style.scss";
import SideNav from "./components/SideNav";
import MobileHeader from "./components/MobileHeader";

import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import SkillSection from "./sections/SkillSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="App">
      <SideNav />
      <MobileHeader />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

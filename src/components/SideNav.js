import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faScrewdriverWrench,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export default function SideNav() {
  const [navColour, setNavColour] = React.useState("purple");
  // Change nav button colour based on window scroll Y
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 600) {
        setNavColour("dark-purple");
      } else if (window.scrollY > 600 && window.scrollY < 2400) {
        setNavColour("green");
      } else if (window.scrollY > 2400 && window.scrollY < 4200) {
        setNavColour("red");
      } else if (window.scrollY > 4200 && window.scrollY < 5600) {
        setNavColour("pink");
      } else {
        setNavColour("light-purple");
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`side-nav nav--${navColour}`}>
      <div>
        <Link to="homeSection" smooth={true} duration={700}>
          <h1 className="logo">&lt;JCKL&gt;</h1>
        </Link>
        <ul>
          <li>
            <Link
              className="nav-btn"
              to="homeSection"
              smooth={true}
              duration={700}
            >
              <FontAwesomeIcon icon={faHome} color="#fff" />
            </Link>
            <p className="nav-btn-text">Home</p>
          </li>
          <li>
            <Link
              className="nav-btn"
              to="aboutSection"
              smooth={true}
              duration={700}
            >
              <FontAwesomeIcon icon={faUser} color="#fff" />
            </Link>
            <p className="nav-btn-text">About Me</p>
          </li>
          <li>
            <Link
              className="nav-btn"
              to="projectSection"
              smooth={true}
              duration={700}
            >
              <FontAwesomeIcon icon={faLaptop} color="#fff" />
            </Link>
            <p className="nav-btn-text">Projects</p>
          </li>
          <li>
            <Link
              className="nav-btn"
              to="skillsSection"
              smooth={true}
              duration={700}
            >
              <FontAwesomeIcon icon={faScrewdriverWrench} color="#fff" />
            </Link>
            <p className="nav-btn-text">Skills</p>
          </li>
          <li>
            <Link
              className="nav-btn"
              to="contactSection"
              smooth={true}
              duration={700}
            >
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </Link>
            <p className="nav-btn-text">Contact Me</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

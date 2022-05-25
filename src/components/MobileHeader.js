import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faScrewdriverWrench,
  faEnvelope,
  faTimes,
  faBars,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
export default function MobileHeader() {
  const [navOpen, setNavOpen] = React.useState(false);

  function toggleNav() {
    setNavOpen((prevNavOpen) => !prevNavOpen);
  }

  return (
    <header className="mobile-header">
      <h1 className="mobile-logo">&lt;JCKL&gt;</h1>
      {navOpen ? (
        <FontAwesomeIcon
          className="close-icon"
          icon={faTimes}
          onClick={toggleNav}
        />
      ) : (
        <FontAwesomeIcon
          className="hamburger-icon"
          icon={faBars}
          onClick={toggleNav}
        />
      )}
      <div
        className={
          navOpen ? "mobile-nav-container open" : "mobile-nav-container"
        }
      >
        <nav className="mobile-nav">
          <ul>
            <li onClick={() => setNavOpen(false)}>
              <Link
                className="mobile-nav-btn"
                to="homeSection"
                smooth={true}
                duration={700}
              >
                <FontAwesomeIcon icon={faHome} color="#fff" />
                <p className="mobile-nav-btn-text">Home</p>
              </Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link
                className="mobile-nav-btn"
                to="aboutSection"
                smooth={true}
                duration={700}
              >
                <FontAwesomeIcon icon={faUser} color="#fff" />
                <p className="mobile-nav-btn-text">About Me</p>
              </Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link
                className="mobile-nav-btn"
                to="projectSection"
                smooth={true}
                duration={700}
              >
                <FontAwesomeIcon icon={faLaptop} color="#fff" />
                <p className="mobile-nav-btn-text">Projects</p>
              </Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link
                className="mobile-nav-btn"
                to="skillsSection"
                smooth={true}
                duration={700}
              >
                <FontAwesomeIcon icon={faScrewdriverWrench} color="#fff" />
                <p className="mobile-nav-btn-text">Skills</p>
              </Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link
                className="mobile-nav-btn"
                to="contactSection"
                smooth={true}
                duration={700}
              >
                <FontAwesomeIcon icon={faEnvelope} color="#fff" />
                <p className="mobile-nav-btn-text">Contact Me</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

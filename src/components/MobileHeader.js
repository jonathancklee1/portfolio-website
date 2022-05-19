import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faScrewdriverWrench,
  faEnvelope,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

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
              <div className="mobile-nav-btn">
                <FontAwesomeIcon icon={faUser} color="#fff" />
              </div>
              <p className="mobile-nav-btn-text">About Me</p>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <div className="mobile-nav-btn">
                <FontAwesomeIcon icon={faLaptop} color="#fff" />
              </div>
              <p className="mobile-nav-btn-text">Projects</p>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <div className="mobile-nav-btn">
                <FontAwesomeIcon icon={faScrewdriverWrench} color="#fff" />
              </div>
              <p className="mobile-nav-btn-text">Skills</p>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <div className="mobile-nav-btn">
                <FontAwesomeIcon icon={faEnvelope} color="#fff" />
              </div>
              <p className="mobile-nav-btn-text">Contact Me</p>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

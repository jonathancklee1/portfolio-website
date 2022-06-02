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
  return (
    <nav className="side-nav">
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

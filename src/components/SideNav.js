import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faScrewdriverWrench,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export default function SideNav() {
  return (
    <nav className="side-nav">
      <div>
        <h1 className="logo">&lt;JCKL&gt;</h1>
        <ul>
          <li>
            <div className="nav-btn">
              <FontAwesomeIcon icon={faHome} color="#fff" />
            </div>
            <p className="nav-btn-text">Home</p>
          </li>
          <li>
            <div className="nav-btn">
              <FontAwesomeIcon icon={faUser} color="#fff" />
            </div>
            <p className="nav-btn-text">About Me</p>
          </li>
          <li>
            <div className="nav-btn">
              <FontAwesomeIcon icon={faLaptop} color="#fff" />
            </div>
            <p className="nav-btn-text">Projects</p>
          </li>
          <li>
            <div className="nav-btn">
              <FontAwesomeIcon icon={faScrewdriverWrench} color="#fff" />
            </div>
            <p className="nav-btn-text">Skills</p>
          </li>
          <li>
            <div className="nav-btn">
              <FontAwesomeIcon icon={faEnvelope} color="#fff" />
            </div>
            <p className="nav-btn-text">Contact Me</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

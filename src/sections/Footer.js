import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (newWindow) newWindow.opener = null;
  };

  return (
    <footer>
      <div className="footer-content">
        <p>
          Built using: {<FontAwesomeIcon icon={faReact} />}{" "}
          <span onClick={() => openInNewTab("https://reactjs.org/")}>
            React
          </span>{" "}
          and {<FontAwesomeIcon icon={faSass} />}{" "}
          <span onClick={() => openInNewTab("https://sass-lang.com/")}>
            SASS
          </span>
        </p>
        <div className="footer-socials-container">
          <FontAwesomeIcon
            icon={faLinkedin}
            onClick={() =>
              openInNewTab(
                "https://www.linkedin.com/in/jonathan-lee-97bbb9207/"
              )
            }
          />
          <FontAwesomeIcon
            icon={faGithub}
            onClick={() => openInNewTab("https://github.com/jonathancklee1")}
          />
          <FontAwesomeIcon
            icon={faCodepen}
            onClick={() => openInNewTab("https://codepen.io/jonathancklee1")}
          />
        </div>
        <p> @ 2022 Jonathan Lee </p>
      </div>
    </footer>
  );
}

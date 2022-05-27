import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function ContactSection() {
  return (
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
              <input className="submit-btn" type="submit" value="send"></input>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}

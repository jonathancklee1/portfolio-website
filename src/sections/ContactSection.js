import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
export default function ContactSection() {
  const refForm = React.useRef();
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o5ec1as",
        "template_cn8goxm",
        refForm.current,
        "I6pPYfFozT0cBVTsZ"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  }
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");

    if (newWindow) newWindow.opener = null;
  };
  return (
    <section className="section contact-section" id="contactSection">
      <h2>Contact Me</h2>
      <div className="socials-container">
        <FontAwesomeIcon
          icon={faGithub}
          onClick={() => openInNewTab("https://github.com/jonathancklee1")}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/jonathan-lee-97bbb9207/")
          }
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          onClick={() =>
            openInNewTab("mailto:jonathancklee@gmail.com?subject=Subject")
          }
        />
      </div>
      <div className="contact-form">
        <label>
          Please feel free to contact me through this form or reach out through
          my socials above!{" "}
        </label>
        <form ref={refForm} onSubmit={sendEmail}>
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

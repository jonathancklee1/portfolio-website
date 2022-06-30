import React from "react";

export default function AboutSection() {
  return (
    <section className="section about-me-section" id="aboutSection">
      <h2>Profile</h2>
      <p className="profile-blurb">
        Technology has always surrounded me growing up whether it be exploring
        cool websites on my old home computer or receiving my first Nintendo
        console for my birthday. It was through my studies when I discovered the
        expansive nature of the internet and found myself diving into web
        development. <br />
        <br />
        From the day I began exploring the amazing portfolios of others and
        watching the process of creating a website on Youtube, the creativeness
        and talent of other developers have sparked a newfound interest in me.
        Ever since then I have been working hard on developing interesting and
        creative solutions that aims to fulfil a need or solve real-world
        issues.
      </p>
      <div className="profile-card">
        <div className="profile-content-wrapper">
          <div className="img-wrapper">
            <img
              src={require("../assets/img/stat-bars.png")}
              className="stat-bar-img"
              alt="stat bar"
            ></img>
            <img
              src={require("../assets/img/pixel-me.gif")}
              className="character-img"
              alt="character"
            ></img>
          </div>

          <div className="profile-content">
            <h4 className="border-bottom-green">Stats</h4>
            <p>
              Name: <span>Jonathan Lee</span>
            </p>
            <p>
              Location: <span>Sydney</span>
            </p>
            <p>
              Languages: <span>English, Cantonese</span>
            </p>
            <p>
              Part-time Job: <span>Academic tutor</span>
            </p>

            <p>
              Fun Facts:{" "}
              <span>
                Learnt how to play guitar and chess over the pandemic, had a
                scary experience on a ski trip.
              </span>
            </p>
          </div>
        </div>
      </div>
      <h2>Education</h2>
      <div className="education-wrapper">
        <div>
          <h4>Bachelor of Information Systems</h4>
          <p>February 2019 - May 2022</p>
          <p>University of New South Wales (UNSW)</p>
        </div>
        <div>
          <h4>Relevant Coursework</h4>
          <ul>
            <li>
              <p>
                <span className="green"> {">"} </span> Business Programming
              </p>
            </li>
            <li>
              <p>
                <span className="green"> {">"} </span>Mobile Application
                Development
              </p>
            </li>
            <li>
              <p>
                <span className="green"> {">"} </span>Networking {"&"} Cyber
                Security
              </p>
            </li>
            <li>
              <p>
                <span className="green"> {">"} </span>Database Management {"&"}{" "}
                Big Data Infrastructures
              </p>
            </li>
            <li>
              <p>
                <span className="green"> {">"} </span>Information Systems
                Innovation {"&"} Transformation
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

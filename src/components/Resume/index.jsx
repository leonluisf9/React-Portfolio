import React from "react";
import newResume from "../../assets/files/LEONLuis.pdf";
import { VscAccount } from "react-icons/vsc";
import { VscServerEnvironment } from "react-icons/vsc";
import { VscArrowCircleDown } from "react-icons/vsc";

function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">Download My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={newResume} className="download-logo" download>
                <VscArrowCircleDown />
              </a>
              <p>
                Love Coding - I develop - Here are my skills!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Font-End Proficiencies</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <VscAccount />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p>
        </div>

        <div className="article column2">
          <p className="column-title">Back-End Proficiencies </p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <VscServerEnvironment/>
              </li>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Oracle</li>
              <li>MongoDB</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
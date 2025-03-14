import React from "react";
import lbkImage from "../../assets/images/lbk.jpeg";
import readmeImage from "../../assets/images/readme.png";
import vehicleBuilderImage from "../../assets/images/vehiclebuilder.png";
import weatherDashboardImage from "../../assets/images/weatherdashboard.png";
import employeeTrackerImage from "../../assets/images/employeetracker.png";
import reactPortfolioImage from "../../assets/images/reactportfolio.jpg";

function Portfolio() {
  return (
    <div>
      <section id="Projects" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Portfolio</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/employee-tracker/">
                {" "}
                <img
                  src={employeeTrackerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Employee Tracker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Employee Tracker</h4>
              <p>
              Command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/little-book-keeper/">
                {" "}
                <img
                  src={lbkImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Little Book Keeper"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Little Book Keeper</h4>
              <p>
                A website written using HTML, CSS, and Javascript focused on helping users keep track of their books and provide recommendations. 
                Books can be organized by genre or alphabetically, and a quiz will be provided to help users find new reads.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/React-Portfolio/">
                {" "}
                <img
                  src={reactPortfolioImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Application Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>React Application Portfolio</h4>
              <p>
              Single-page application deployed React portfolio of work samples, using React, React Router, and Bootstrap.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/Professional-README-Generator/">
                {" "}
                <img
                  src={readmeImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Readme Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Professional ReadME Generator</h4>
              <p>
              This application was created to generate a Professional README markdown file from user input.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/weather-dashboard/">
                {" "}
                <img
                  src={weatherDashboardImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user to get a city's current weather conditions and the five day forecast.
                The user can see the temperature, humidity levels and wind speed. OpenWeather APIs are used to access weather data by making 
                requests with specific parameters to a URL. {" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/leonluisf9/Vehicle-Builder/">
                {" "}
                <img
                  src={vehicleBuilderImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Vehicle Builder"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Vehicle Builder</h4>
              <p>
              A typeScript command-line application that prompts the user to either create a new vehicle or select an existing vehicle. 
              After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle. 
              The user is returned to the actions menu after each action until they decide to exit the application. 
              It uses cars provided vehicle framework to have additional options for motorbikes and trucks..{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
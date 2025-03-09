import React from "react";
import profileImage from "../../assets/Profile/Pic.jpg";

function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div className="intro-info">
          <div className="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" /> 
          </div>
          <p>
            Greetings! I'm Luis Leon. I am a new Web Developer with a background in Electronics Systems. I am learning to create websites to improve my Career. My learning enables me to deliver webpages with HTML/CSS and JavaScript. I also use frameworks like
            React, Bootstap to deliver engaging experiences. With over 20 years of experience in the technology sector, I am an Electronics Systems Engineer now transitioning into Full Stack Development. Having led the design and 
            implementation of complex hardware and embedded software systems across industries such as manufacturing, banking, outdoor travel and recreation, I bring a rare blend of engineering depth, systems thinking, and hands-on problem-solving<br />
          </p>
          <p>However, in today's fast-paced Technology landscape I am laying a foundation in performance optimization of engineering depth, systems architechture and hands-on problem-solving based on the world of modern web and software development.
          My technical expertise, combined with a passion for lifelong learning, has naturally evolved into mastering modern full stack technologies, including HTML, CSS, JavaScript, React, Node.js and SQL.
          Driven by curiosity and desire to build impactful digital solutions, I now focus on creating responsive, efficient and scalable web applications. In collaborative environments, I adapt quicly to new tools and frameworks, and bring seasoned discipline and precision to every line of code.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import TechGrid from "./TechGrid";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p> I'm a Computer Engineering student, with a deep
        interest in Web Development. I enjoy building
        projects that solve real-world problems and love learning new
        technologies every day.
        I also learn DSA to improve my problem solving skills.</p>
        <p>My goal is to constantly evolve as
        a developer and contribute meaningfully to impactful projects.</p>

      <div className="techgrid-wrapper">
        <TechGrid />
      </div>
    </section>
  );
};

export default About;

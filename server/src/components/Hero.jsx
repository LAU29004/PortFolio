import React from "react";
import "../styles/Hero.css";
import coderImage from "../assets/coder.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-main">
        <div className="hero-text">
          <h1>
            <span className="typewriter-line">Hi, I'm Laukik Waikar</span>
            <span className="no-typewriter">Web-Developer & CS Student</span>
          </h1>
          <p>
            I’m a passionate Computer Science student and developer specializing
            in front-end development, DSA, and projects that solve real-world problems.
          </p>
          <h2>My Socials</h2>
          <ul className="social-list">
            <li>
              <FaLinkedin className="social-icon" />
              <a href="https://www.linkedin.com/in/laukik-waikar-49b023300" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <FaGithub className="social-icon" />
              <a href="https://github.com/LAU29004" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
          </ul>

          <h2>My Resume</h2>
          <div className="resume-buttons">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-view-resume"
            >
              View Resume
            </a>

            <a 
              href="/resume.pdf" 
              download="Laukik_Waikar_Resume.pdf" 
              className="btn btn-download-resume"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={coderImage} alt="Coder" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

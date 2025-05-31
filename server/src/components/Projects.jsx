import React from "react";
import "../styles/Projects.css";
import weatherImg from "../assets/weather.png";
import portfolioImg from "../assets/portfolio.png";
import numberImg from "../assets/guess_number.png";
const projects = [
  {
    title: "Weather Dashboard",
    image: weatherImg, 
    description: "React app showing real-time weather using OpenWeather API.",
    techStack: ["React", "Node.js", "OpenWeather API"],
    github: "https://github.com/LAU29004/FUTURE_FS_02.git",
    live: "https://lau29004.github.io/FUTURE_FS_02/"
  },
  {
    title: "Portfolio Website",
    image: portfolioImg,
    description: "A place to display my projects and skills.",
    techStack: ["React", "Node", "MongoDB"],
    github: "https://github.com/LAU29004/FUTURE_FS_01.git",
    live: "#"
  },
  {
    title: "A Python Mini Project",
    image: numberImg,
    description: "Guess the number game made using Python modules and Tkinter for GUI.",
    techStack: ["Python","Tkinter"],
    github: "https://github.com/LAU29004/Guess_number_python.git",
    live: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <p>Some of the work I’ve done recently</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-vertical-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import "../styles/TechGrid.css";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/javascript.svg";
import pythonLogo from "../assets/python.svg";
import reactLogo from "../assets/react.svg";
import mongoLogo from "../assets/mongodb.svg";
import cppLogo from "../assets/cplusplus.svg";
import cLogo from "../assets/c.svg";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JAVASCRIPT", logo: jsLogo },
  { name: "PYTHON", logo: pythonLogo },
  { name: "REACTJS", logo: reactLogo },
  { name: "MONGO", logo: mongoLogo },
  { name: "C++", logo: cppLogo },
  { name: "C", logo: cLogo },
];

const TechGrid = () => {
  return (
    <div className="tech-grid-wrapper">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="violet" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>

      <div className="tech-grid">
        <h1>My Development Toolkit</h1>
        <div className="hex-row">
          <Hex skill={skills[0]} />
        </div>

        <div className="hex-row offset">
          <Hex skill={skills[1]} />
          <Hex skill={skills[2]} />
        </div>

        <div className="hex-row">
          <Hex skill={skills[3]} />
          <Hex skill={skills[4]} />
          <Hex skill={skills[5]} />
        </div>

        <div className="hex-row offset">
          <Hex skill={skills[6]} />
          <Hex skill={skills[7]} />
        </div>
      </div>
    </div>
  );
};

const Hex = ({ skill }) => {
  return (
    <div className="hex">
      <svg viewBox="0 0 100 100" className="hex-svg">
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="url(#grad1)"
        />
      </svg>
      <img src={skill.logo} alt={skill.name} className="hex-logo" />
      <div className="hex-overlay">{skill.name}</div>
    </div>
  );
};

export default TechGrid;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGit,
  faPython,
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <h3 className="section-title">Skills</h3>
      <div className="solar-system"></div>
      
      <div className="planet1">
        <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
        <span className="skill-name">HTML5</span>
      </div>
      
      <div className="planet2">
        <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
        <span className="skill-name">CSS3</span>
      </div>
      
      <div className="planet3">
        <FontAwesomeIcon icon={faJs} className="skill-icon" />
        <span className="skill-name">JavaScript</span>
      </div>
      
      <div className="planet4">
        <FontAwesomeIcon icon={faReact} className="skill-icon" />
        <span className="skill-name">React</span>
      </div>
      
      <div className="planet5">
        <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
        <span className="skill-name">Node.js</span>
      </div>
      
      <div className="planet6">
        <FontAwesomeIcon icon={faJava} className="skill-icon" />
        <span className="skill-name">Java</span>
      </div>
      
      <div className="planet7">
        <FontAwesomeIcon icon={faFigma} className="skill-icon" />
        <span className="skill-name">Figma</span>
      </div>
      
      <div className="planet8">
        <FontAwesomeIcon icon={faGit} className="skill-icon" />
        <span className="skill-name">Git</span>
      </div>
      
      <div className="planet9">
        <FontAwesomeIcon icon={faPython} className="skill-icon" />
        <span className="skill-name">Python</span>
      </div>
      
      <div className="planet10">
        <FontAwesomeIcon icon={faDatabase} className="skill-icon" />
        <span className="skill-name">Database</span>
      </div>
    </div>
  );
};

export default Skills;

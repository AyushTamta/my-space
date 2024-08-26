import React from 'react';
import './Header.css';
import { Link } from 'react-scroll'; // Import Link from react-scroll

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Hey there, It's Ayush Tamta</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="extra-curricular" smooth={true} duration={500}>Extrass</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

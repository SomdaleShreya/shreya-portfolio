import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Sidebars.scss';

const LeftSidebar = () => {
  return (
    <div className="sidebar left-sidebar">
      <ul className="social-links">
        <li>
          <a href="https://github.com/shreyasomdale" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shreya-somdale/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
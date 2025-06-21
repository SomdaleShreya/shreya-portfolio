import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import '../styles/Header.scss';

const Header = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__logo">
        <a href="#hero">{'<SS />'}</a>
      </div>
      <nav className={`header__nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="header__socials--mobile">
            <a href="https://github.com/shreyasomdale" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shreya-somdale/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </nav>
      <div className="header__right">
        <a href="https://github.com/shreyasomdale" target="_blank" rel="noopener noreferrer" className="header__social-icon"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shreya-somdale/" target="_blank" rel="noopener noreferrer" className="header__social-icon"><FaLinkedin /></a>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
        <div className="header__menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
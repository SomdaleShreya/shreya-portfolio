import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    textAlign: 'center',
    color: 'var(--text-color-light)',
    fontSize: '0.9rem',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '1rem',
    fontSize: '1.5rem',
  };

  const linkStyle = {
    color: 'var(--text-color-light)',
    transition: 'color 0.3s ease',
  };

  const handleMouseOver = (e) => e.currentTarget.style.color = 'var(--primary-color)';
  const handleMouseOut = (e) => e.currentTarget.style.color = 'var(--text-color-light)';

  return (
    <footer style={footerStyle}>
      <div style={socialIconsStyle}>
        <a href="https://github.com/shreyasomdale" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shreya-somdale/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><FaLinkedin /></a>
      </div>
      <p>© {new Date().getFullYear()} Shreya Somdale. Built with React & SCSS.</p>
    </footer>
  );
};
export default Footer;
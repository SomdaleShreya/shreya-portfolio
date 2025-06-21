import React from 'react';
import '../styles/Hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero__content">
        <h1 className="hero__title">Hi, I'm Shreya Somdale</h1>
        <p className="hero__subtitle">An Aspiring Software Engineer with a passion for building beautiful and functional web applications.</p>
        <a href="#projects" className="hero__cta-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
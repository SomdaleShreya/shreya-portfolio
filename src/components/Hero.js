import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Hero.scss';
import myResume from '../assets/Shreya_Somdale_Resume.pdf';

const Hero = () => {
  return (
    <section id="hero" className="hero section">
      <div className="hero__content">
        <p className="hero__intro">Hi, my name is</p>
        <h1 className="hero__title">Shreya Somdale.</h1>
        <TypeAnimation
          sequence={[
            'I build things for the web.', 2000,
            'I am a Full Stack Developer.', 2000,
            'I am a Problem Solver.', 2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="hero__subtitle"
        />
        <p className="hero__description">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on creating scalable and user-friendly web applications.
        </p>
        <div className="hero__cta-group">
          <a href={myResume} download="Shreya_Somdale_Resume.pdf" className="cta-button primary">Download CV</a>
          <a href="#contact" className="cta-button secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
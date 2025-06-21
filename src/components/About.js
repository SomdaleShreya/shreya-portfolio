import React from 'react';
import '../styles/About.scss';
// import myImage from '../assets/your-professional-photo.jpg'; // Uncomment and use your photo

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About Me</h2>
      <div className="about__content">
        {/* <img src={myImage} alt="Shreya Somdale" className="about__image" /> */}
        <div className="about__text">
          <p>
            I am a dedicated and detail-oriented Computer Engineering student at SKN Sinhgad College with an excellent academic record and a strong foundation in software development.
          </p>
          <p>
            I am proficient in Java, JavaScript, and building responsive user interfaces with React.js. I thrive on solving complex problems and am passionate about learning new technologies and applying them to create efficient, scalable, and user-friendly solutions.
          </p>
          <div className="about__skills">
            <span className="skill-tag">Java</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">HTML & SCSS</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
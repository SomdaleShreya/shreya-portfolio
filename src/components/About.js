import React from 'react';
import '../styles/About.scss';

const skills = ['Java', 'JavaScript (ES6+)', 'React.js', 'HTML5', 'SCSS', 'SQL', 'Git', 'Node.js', '.NET (Basic)'];

const About = () => {
  return (
    <section id="about" className="about section">
      <h2 className="section__title">About Me</h2>
      <div className="about__content">
        <div className="about__text">
          <p>
            Hello! I'm Shreya, a passionate software engineer with a strong foundation in computer science and a love for creating elegant solutions to complex problems. My journey into tech began with a curiosity for how things work, which quickly evolved into a full-fledged passion for software development.
          </p>
          <p>
            I thrive in environments where I can continuously learn and apply new technologies. I have hands-on experience in both frontend and backend development, allowing me to build complete, robust applications from scratch. I'm particularly interested in building beautiful, responsive user interfaces that provide a seamless user experience.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="about__skills-list">
            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
import React from 'react';
import '../styles/Projects.scss';

// You can create a projectsData array to make this cleaner
const projectsData = [
  {
    title: 'Meditaker - Medicine Reminder System',
    description: 'A full-stack application to help users manage medication schedules by scanning medicine details and setting timely reminders.',
    tech: ['Java', 'React.js', 'SQL', 'Git'],
    liveUrl: '#', // Add your live project URL
    codeUrl: '#' // Add your GitHub repo URL
  },
  {
    title: 'Event Management System',
    description: 'Led a team to develop a system simplifying event booking with a user-friendly interface, calendar tracking, and secure login.',
    tech: ['Java', 'React.js', 'SQL'],
    liveUrl: '#',
    codeUrl: '#'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built from scratch using React and SCSS to showcase my skills and projects to potential employers.',
    tech: ['React.js', 'SCSS', 'JavaScript'],
    liveUrl: '#', // The current site
    codeUrl: '#' // The repo for this site
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section__title">My Projects</h2>
      <div className="projects__grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="project-card__links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">Live Demo</a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
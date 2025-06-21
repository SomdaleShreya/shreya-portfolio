import React from 'react';
import { projectsData } from '../data/projectsData';
import '../styles/Projects.scss';
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <h2 className="section__title">Things I've Built</h2>
      <div className="projects__list">
        {projectsData.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-item__image-container">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={`${project.title} screenshot`} className="project-item__image" />
              </a>
            </div>
            <div className="project-item__content">
              <p className="project-item__eyebrow">Featured Project</p>
              <h3 className="project-item__title">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <div className="project-item__description">
                <p>{project.description}</p>
              </div>
              <ul className="project-item__tech-list">
                {project.tech.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <div className="project-item__links">
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link"><FaGithub /></a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="External Link"><FiExternalLink /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
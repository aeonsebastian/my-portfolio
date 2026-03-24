import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../styles/Projects.css'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string
  link?: string
  image?: string
}

function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Schools Division Office of Caloocan City Inventory Management System',
      description: 'Inventory management system for tracking and managing inventory across all schools in the Schools Division Office of Caloocan City.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 2,
      title: 'Circuit Cube',
      description: 'Logic circuits are fundamental to digital electronics, serving as the building blocks of devices ranging from everyday gadgets to complex computing systems. These circuits process binary signals (0sand 1s) through logical gates such as AND, OR, and NOT. To construct these circuits, several basic components are required, including a breadboard, battery, integrated circuits (ICs), diodes, and resistors.',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <p>Project Preview</p>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaGithub /> Github
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

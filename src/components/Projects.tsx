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
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with payment integration, inventory management, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team features, and progress tracking.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      link: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with geolocation, forecast data, and beautiful visualizations.',
      technologies: ['React', 'REST API', 'Chart.js', 'CSS Grid'],
      github: '#',
      link: '#',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and trend analysis.',
      technologies: ['React', 'D3.js', 'Express.js', 'PostgreSQL'],
      github: '#',
      link: '#',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Content management system for creating and publishing blog posts with Markdown support.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
      github: '#',
      link: '#',
    },
    {
      id: 6,
      title: 'Mobile App Companion',
      description: 'Web application companion for mobile app with API integration and data synchronization.',
      technologies: ['React', 'GraphQL', 'Apollo', 'Node.js'],
      github: '#',
      link: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
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

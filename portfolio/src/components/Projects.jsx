import { projects, projectsLink } from '../data/portfolioData'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading id="projects-title" title="Selected projects">
          Full-stack applications with a focus on real-time features and secure design.
        </SectionHeading>

        <ul className="project-grid">
          {projects.map((project) => (
            <li className="project card" key={project.id}>
              <div className="project-shot">
                <img
                  src={project.image}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="chips chips--small" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li className="chip" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github ? (
                    <a className="link-btn" href={project.github} target="_blank" rel="noopener noreferrer">
                      <Icon name="github" size={18} />
                      Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
                    </a>
                  ) : null}
                  {project.live ? (
                    <a className="link-btn" href={project.live} target="_blank" rel="noopener noreferrer">
                      <Icon name="arrow-up-right" size={18} />
                      Live demo<span className="sr-only"> of {project.title} (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {projectsLink.href ? (
          <p className="projects-more">
            <a className="link-btn" href={projectsLink.href} target="_blank" rel="noopener noreferrer">
              {projectsLink.label}
              <Icon name="arrow-up-right" size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        ) : null}
      </div>
    </section>
  )
}

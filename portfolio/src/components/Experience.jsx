import { useRef } from 'react'
import { experience } from '../data/portfolioData'
import useInView from '../hooks/useInView'
import SectionHeading from './SectionHeading'
import './Experience.css'

// "EduSkills & APSCHE" -> "EA" (used when an organization has no logo)
function initialsOf(name) {
  return name
    .replace(/\(.*?\)/g, '')
    .split(/\s+/)
    .filter((word) => /^[A-Za-z0-9]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('')
}

export default function Experience() {
  const figureRef = useRef(null)
  const typing = useInView(figureRef)

  return (
    <section className="section section--alt" id="experience" aria-labelledby="experience-title">
      <div className="container exp-layout">
        <figure
          className={`exp-figure${typing ? ' play' : ''}`}
          ref={figureRef}
          role="img"
          aria-label="Animated illustration of a developer typing on a laptop at a desk, with a plant and a hanging lamp"
        >
          <div className="exp-typing" />
        </figure>

        <div>
          <SectionHeading id="experience-title" title="Professional experience">
            Internships, virtual programs and trainee roles across security, development and automation.
          </SectionHeading>

          <ol className="exp-list">
            {experience.map((job) => (
              <li className="exp-item" key={job.id}>
                <p className="exp-date">{job.date}</p>
                <div className="exp-head">
                  {job.logo ? (
                    <img className="exp-logo" src={job.logo} width="40" height="40" alt="" loading="lazy" decoding="async" />
                  ) : (
                    <span className="exp-logo exp-logo--initials" aria-hidden="true">
                      {initialsOf(job.organization)}
                    </span>
                  )}
                  <div>
                    <h3 className="exp-org">{job.organization}</h3>
                    <p className="exp-role">{job.role}</p>
                  </div>
                </div>
                <ul className="exp-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

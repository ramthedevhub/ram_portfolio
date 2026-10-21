import { about, certifications } from '../data/portfolioData'
import SectionHeading from './SectionHeading'
import './About.css'

export default function About() {
  const stats = [
    { label: 'Projects completed', value: about.projectsCompleted },
    { label: 'Credentials earned', value: String(certifications.length) },
  ].filter((stat) => stat.value)

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="about-figure">
          <img
            src="/images/about-idle.webp"
            width="400"
            height="368"
            alt="Illustration of a developer sipping tea by a window, next to a stack of books"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <div className="about-content">
          <SectionHeading id="about-title" title="About me" />
          {about.paragraphs.map((text) => (
            <p className="about-text" key={text}>
              {text}
            </p>
          ))}

          <h3 className="mini-title">Career interests</h3>
          <ul className="chips">
            {about.interests.map((interest) => (
              <li className="chip" key={interest}>
                {interest}
              </li>
            ))}
          </ul>

          <dl className="stats">
            {stats.map((stat) => (
              <div className="stat card" key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

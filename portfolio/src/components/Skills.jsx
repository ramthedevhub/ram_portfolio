import { skillCategories } from '../data/portfolioData'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" title="Skills">
          The languages, frameworks and security tools I use to build and test applications.
        </SectionHeading>

        <ul className="skill-list">
          {skillCategories.map((category) => (
            <li className="skill-row" key={category.id}>
              <h3 className="skill-title">
                <span className="skill-icon">
                  <Icon name={category.icon} size={22} />
                </span>
                {category.title}
              </h3>
              <ul className="chips" aria-label={`${category.title}: skills`}>
                {category.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

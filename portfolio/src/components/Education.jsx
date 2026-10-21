import { education } from '../data/portfolioData'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import './Education.css'

const FIELDS = [
  { key: 'degree', label: 'Degree' },
  { key: 'specialization', label: 'Specialization' },
  { key: 'institution', label: 'Institution' },
  { key: 'graduationYear', label: 'Graduation year' },
  { key: 'grade', label: 'Grade' },
]

export default function Education() {
  const { summary, timeline } = education
  const filled = FIELDS.filter((field) => summary[field.key])
  // Only while running `npm run dev`: remind you which details are still empty
  const missing = FIELDS.filter((field) => field.key !== 'grade' && !summary[field.key])

  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="container edu-grid">
        <div>
          <SectionHeading id="education-title" title="Education" />
          <div className="card edu-summary">
            <h3>{summary.headline}</h3>
            <dl className="edu-facts">
              {filled.map((field) => (
                <div key={field.key}>
                  <dt>{field.label}</dt>
                  <dd>{summary[field.key]}</dd>
                </div>
              ))}
            </dl>
            {import.meta.env.DEV && missing.length > 0 ? (
              <p className="edu-todo">
                Dev reminder (hidden on the live site): add {missing.map((field) => field.label.toLowerCase()).join(', ')} in{' '}
                <code>src/data/portfolioData.js</code>.
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <h3 className="journey-title">Learning journey</h3>
          <ol className="journey">
            {timeline.map((step) => (
              <li className="journey-item" key={step.id} style={{ '--c': step.color }}>
                <span className="journey-node" aria-hidden="true">
                  <Icon name={step.icon} size={22} />
                </span>
                <div className="journey-card card">
                  <p className="journey-year">{step.year}</p>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

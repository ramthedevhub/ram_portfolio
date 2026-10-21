import { useState } from 'react'
import { certificationFilters, certifications, certificationsBundle } from '../data/portfolioData'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import './Certifications.css'

const TYPE_LABELS = {
  certification: 'Certification',
  virtual: 'Virtual experience',
  course: 'Course',
}

const searchText = (cert) =>
  [cert.title, cert.issuer, cert.meta, cert.date, ...cert.skills].join(' ').toLowerCase()

export default function Certifications() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const term = query.trim().toLowerCase()
  const visible = certifications.filter(
    (cert) => (filter === 'all' || cert.category === filter) && (!term || searchText(cert).includes(term)),
  )
  const countFor = (id) => (id === 'all' ? certifications.length : certifications.filter((c) => c.category === id).length)

  return (
    <section className="section section--alt" id="certifications" aria-labelledby="certifications-title">
      <div className="container">
        <div className="certs-top">
          <figure className="certs-figure">
            <img src="/images/certs-desk.webp" width="505" height="480" alt="" loading="lazy" decoding="async" />
          </figure>
          <div>
            <SectionHeading id="certifications-title" title="Certifications & virtual experiences">
              Industry certifications and hands-on programs across cloud engineering, cybersecurity, automation and
              programming. Each card links to its certificate.
            </SectionHeading>

            <div className="certs-tools">
              <div className="certs-filters" role="group" aria-label="Filter credentials">
                {certificationFilters.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={filter === item.id ? 'on' : ''}
                    aria-pressed={filter === item.id}
                    onClick={() => setFilter(item.id)}
                  >
                    {item.label} <span className="certs-count">{countFor(item.id)}</span>
                  </button>
                ))}
              </div>
              <label className="certs-search">
                <span className="sr-only">Search credentials</span>
                <Icon name="search" size={18} />
                <input
                  type="search"
                  placeholder="Search credentials…"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <ul className="cert-grid">
          {visible.map((cert) => {
            const primary = cert.links.find((link) => link.primary)
            const others = cert.links.filter((link) => !link.primary)
            return (
              <li className="cert card" key={cert.id} style={{ '--b': cert.color }}>
                <div className="cert-top">
                  <span className="cert-badge" aria-hidden="true">
                    {cert.badge}
                  </span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-meta">{cert.meta}</p>
                <ul className="chips chips--small" aria-label="Skills covered">
                  {cert.skills.map((skill) => (
                    <li className="chip" key={skill}>
                      {skill}
                    </li>
                  ))}
                </ul>
                <div className="cert-foot">
                  <span className="cert-type">{TYPE_LABELS[cert.category]}</span>
                  {others.map((link) => (
                    <a className="cert-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <span className="sr-only"> for {cert.title} (opens in a new tab)</span>
                    </a>
                  ))}
                  {primary ? (
                    <a className="cert-view" href={primary.href} target="_blank" rel="noopener noreferrer">
                      {primary.label} <Icon name="arrow-up-right" size={16} />
                      <span className="sr-only"> for {cert.title} (opens in a new tab)</span>
                    </a>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>

        {visible.length === 0 ? (
          <p className="certs-empty">No credentials match “{query}”. Try a different keyword or filter.</p>
        ) : null}

        <p className="certs-more">
          <span aria-live="polite">
            Showing {visible.length} of {certifications.length} credentials
          </span>
          {certificationsBundle.href ? (
            <a className="link-btn" href={certificationsBundle.href} target="_blank" rel="noopener noreferrer">
              {certificationsBundle.label}
              <Icon name="arrow-up-right" size={18} />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : null}
        </p>
      </div>
    </section>
  )
}

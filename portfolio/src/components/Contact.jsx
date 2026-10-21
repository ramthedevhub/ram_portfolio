import { useRef, useState } from 'react'
import { about, profile } from '../data/portfolioData'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import './Contact.css'

const SUBJECTS = [
  'Software Engineering opportunity',
  'Full-Stack Developer opportunity',
  'Cybersecurity Analyst opportunity',
  'Collaboration / project',
  'Just saying hello',
]
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export default function Contact() {
  const formRef = useRef(null)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || SUBJECTS[0])
    const message = String(data.get('message') || '').trim()

    const found = {}
    if (!name) found.name = 'Please enter your name.'
    if (!EMAIL_PATTERN.test(email)) found.email = 'Please enter a valid email address.'
    if (!message) found.message = 'Please write a short message.'
    setErrors(found)

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      setStatus('')
      formRef.current.elements[firstInvalid].focus()
      return
    }

    // Frontend-only: open the visitor's email app with a ready-made draft.
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setStatus(`Your email app should open with a draft. Press send there. If nothing opens, write to ${profile.email}.`)
  }

  const rows = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: 'pin', label: 'Location and work model', value: profile.location, href: '' },
    { icon: 'github', label: 'GitHub', value: profile.github.replace(/^https?:\/\//, ''), href: profile.github, external: true },
    { icon: 'linkedin', label: 'LinkedIn', value: 'LinkedIn profile', href: profile.linkedin, external: true },
  ].filter((row) => row.value && (row.label !== 'LinkedIn' || row.href))

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading id="contact-title" title="Let’s talk">
          I’m open to {about.openTo}. The quickest way to reach me is email.
        </SectionHeading>

        <div className="contact-grid">
          <div className="card contact-card">
            <h3>Contact details</h3>
            <ul className="contact-list">
              {rows.map((row) => {
                const inner = (
                  <>
                    <span className="contact-icon">
                      <Icon name={row.icon} size={20} />
                    </span>
                    <span className="contact-text">
                      <small>{row.label}</small>
                      <b>{row.value}</b>
                    </span>
                  </>
                )
                return (
                  <li key={row.label}>
                    {row.href ? (
                      <a
                        className="contact-row"
                        href={row.href}
                        {...(row.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {inner}
                        {row.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                      </a>
                    ) : (
                      <div className="contact-row">{inner}</div>
                    )}
                  </li>
                )
              })}
            </ul>
            <a className="btn btn-ghost contact-resume" href={profile.resume} download={profile.resumeFileName}>
              <Icon name="file" size={18} /> Download résumé
            </a>
          </div>

          <form className="card contact-card" ref={formRef} onSubmit={handleSubmit} noValidate>
            <h3>Send a message</h3>
            <p className="form-note">
              This form doesn’t send anything by itself. It opens a ready-to-send draft in your email app, addressed to{' '}
              {profile.email}.
            </p>

            <div className="form-grid">
              <label className="field">
                <span>Your name</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  aria-invalid={errors.name ? 'true' : undefined}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                />
                {errors.name ? (
                  <em className="field-error" id="err-name">
                    {errors.name}
                  </em>
                ) : null}
              </label>
              <label className="field">
                <span>Your email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  aria-invalid={errors.email ? 'true' : undefined}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                />
                {errors.email ? (
                  <em className="field-error" id="err-email">
                    {errors.email}
                  </em>
                ) : null}
              </label>
              <label className="field field--wide">
                <span>Topic</span>
                <select name="subject" defaultValue={SUBJECTS[0]}>
                  {SUBJECTS.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
              </label>
              <label className="field field--wide">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  maxLength="1500"
                  placeholder="Tell me about the role or project…"
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                />
                {errors.message ? (
                  <em className="field-error" id="err-message">
                    {errors.message}
                  </em>
                ) : null}
              </label>
            </div>

            <button className="btn btn-primary form-submit" type="submit">
              <Icon name="send" size={18} /> Open email draft
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

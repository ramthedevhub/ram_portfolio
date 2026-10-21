import { Fragment, useRef } from 'react'
import { hero, profile } from '../data/portfolioData'
import useHeadTracking from '../hooks/useHeadTracking'
import useLamp from '../hooks/useLamp'
import Icon from './Icon'
import './Hero.css'

// Letters of a line, each wrapped so they can rise in one after another.
// Words are kept together so a line never breaks in the middle of a word.
function Letters({ text, offset = 0 }) {
  let index = offset
  return text.split(' ').map((word, wordIndex, words) => {
    const start = index
    index += word.length + 1
    return (
      <Fragment key={wordIndex}>
        <span className="w">
          {[...word].map((letter, i) => (
            <span className="ch" key={i} style={{ '--c': start + i }}>
              {letter}
            </span>
          ))}
        </span>
        {wordIndex < words.length - 1 ? ' ' : null}
      </Fragment>
    )
  })
}

// The intro sentence, one word at a time; highlighted phrases get an animated underline.
function Words({ segments }) {
  let count = 0
  return segments.map((segment, segmentIndex) => {
    const nodes = segment.text
      .split(/(\s+)/)
      .filter(Boolean)
      .map((piece, i) =>
        /^\s+$/.test(piece) ? (
          ' '
        ) : (
          <span className="wd" key={i} style={{ '--w': count++ }}>
            {piece}
          </span>
        ),
      )
    return segment.highlight ? (
      <mark className="hl" key={segmentIndex}>
        {nodes}
      </mark>
    ) : (
      <Fragment key={segmentIndex}>{nodes}</Fragment>
    )
  })
}

export default function Hero({ theme, setTheme }) {
  const heroRef = useRef(null)
  const sceneRef = useRef(null)
  const headRef = useRef(null)
  const fxRef = useRef(null)

  useHeadTracking({ heroRef, sceneRef, canvasRef: headRef })
  const { toggle, preload } = useLamp({ sceneRef, fxRef, theme, setTheme })

  const isDark = theme === 'dark'
  const nameParts = profile.name.split(' ')
  const lineOne = nameParts.slice(0, -1).join(' ')
  const lineTwo = nameParts[nameParts.length - 1]

  return (
    <section className="hero" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-wrap">
        <div className="hero-copy">
          <p className="hi">
            <span className="sr-only">{hero.greeting}</span>
            <span aria-hidden="true">
              <Letters text={hero.greeting} />
            </span>
            <svg viewBox="0 0 54 8" fill="none" aria-hidden="true">
              <path d="M1 6.5C14 2 33 1 53 3" stroke="#f26a1f" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </p>

          <h1 className="hero-title" id="hero-title">
            <span className="sr-only">{profile.name}</span>
            <span className="line" aria-hidden="true">
              <Letters text={lineOne} />
            </span>
            <span className="line" aria-hidden="true">
              <Letters text={lineTwo} offset={lineOne.length + 2} />
            </span>
          </h1>

          <p className="role intro" style={{ '--i': 8 }}>
            {profile.title}
          </p>

          <p className="lede">
            <Words segments={hero.intro} />
          </p>

          <ul className="hero-skills intro" style={{ '--i': 12 }} aria-label="Primary skills">
            {hero.primarySkills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>

          <div className="hero-cta intro" style={{ '--i': 14 }}>
            <a className="btn btn-primary" href="#projects">
              View my work <Icon name="arrow-right" size={18} />
            </a>
            <a className="btn btn-ghost" href={profile.resume} download={profile.resumeFileName}>
              Download résumé <Icon name="download" size={18} />
            </a>
          </div>
        </div>

        <div className="scene intro scene-in" ref={sceneRef} style={{ '--i': 2 }}>
          <img
            className="plate"
            src="/images/hero-light.webp"
            width="690"
            height="601"
            alt="Illustration of a developer in glasses typing on a laptop in an orange bean bag chair, with a hanging lamp, a shelf of books and a plant"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          <img
            className="plate plate-dark"
            src="/images/hero-dark.webp"
            width="690"
            height="601"
            alt=""
            aria-hidden="true"
            decoding="async"
            draggable="false"
          />
          <canvas className="head" ref={headRef} width="234" height="320" aria-hidden="true" />
          <img
            className="cord"
            src="/images/lamp-cord.webp"
            width="13"
            height="264"
            alt=""
            aria-hidden="true"
            draggable="false"
          />
          <canvas className="fx" ref={fxRef} width="350" height="540" aria-hidden="true" />
          <button
            className="bulb"
            type="button"
            onClick={toggle}
            onPointerEnter={preload}
            onFocus={preload}
            aria-pressed={isDark}
            aria-label={isDark ? 'Turn the lamp on (light mode)' : 'Turn the lamp off (dark mode)'}
          />
          <button className="bulb cordhit" type="button" onClick={toggle} tabIndex={-1} aria-hidden="true" />
        </div>
      </div>

      <a className="cue intro" style={{ '--i': 9 }} href="#about">
        <span>About me</span>
        <Icon name="chevron-down" size={18} />
      </a>
    </section>
  )
}

import { navLinks, profile } from '../data/portfolioData'
import Icon from './Icon'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a className="footer-top" href="#home">
          Back to top <Icon name="arrow-up" size={16} />
        </a>
      </div>
    </footer>
  )
}

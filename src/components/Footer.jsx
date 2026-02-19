import { SOCIAL_LINKS } from '../data/socialLinks';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__tagline">Connect with us</p>
        <div className="footer__social">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label={item.label}
            >
              <span className={`footer__icon footer__icon--${item.icon}`} aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

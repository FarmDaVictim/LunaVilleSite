import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const SECTION_LINKS = [
  { path: '/', label: 'Home', hash: '#hero' },
  { path: '/', label: 'About', hash: '#about-preview' },
  { path: '/', label: 'Shop', hash: '#shop' },
  { path: '/', label: 'Classes', hash: '#classes' },
  { path: '/', label: 'Auctions', hash: '#auctions' },
  { path: '/', label: 'Contact', hash: '#contact-preview' },
];

const PAGE_LINKS = [
  { path: '/catalog', label: 'Catalog' },
  { path: '/archive', label: 'Archive' },
  { path: '/press', label: 'Press' },
  { path: '/private-list', label: 'Private' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <Logo />
        </div>

        <ul className="navbar__sections">
          {SECTION_LINKS.map((item) => (
            <li key={item.hash}>
              <Link
                to={`${item.path}${item.hash}`}
                className={`navbar__section-link ${isHome && location.hash === item.hash ? 'navbar__section-link--active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {PAGE_LINKS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `navbar__section-link ${isActive ? 'navbar__section-link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
        </button>
      </div>

      <div
        className={`navbar__dropdown ${menuOpen ? 'navbar__dropdown--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="navbar__dropdown-backdrop" onClick={() => setMenuOpen(false)} />
        <div className="navbar__dropdown-panel">
          <ul className="navbar__dropdown-list">
            {SECTION_LINKS.map((item) => (
              <li key={item.hash}>
                <Link
                  to={`${item.path}${item.hash}`}
                  className={`navbar__dropdown-link ${isHome && location.hash === item.hash ? 'navbar__dropdown-link--active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {PAGE_LINKS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `navbar__dropdown-link ${isActive ? 'navbar__dropdown-link--active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

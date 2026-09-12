import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { lockScroll, unlockScroll } from '../../utils/scrollLock';
import './header.css';

const navItems = [
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'resume', label: 'Résumé' },
  { to: 'contact', label: 'Contact' },
];

const SCROLLED_AT = 24;
const NAV_OFFSET = -72;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > SCROLLED_AT);
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    lockScroll();
    // The drawer slides out rather than unmounting, so `inert` below keeps its links out of
    // the tab order while closed. Focus moves in on open and back to the button on close.
    drawerRef.current?.querySelector('a')?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      unlockScroll();
    };
  }, [menuOpen]);

  // react-scroll renders a bare <a> with only the props it is handed — no href — so without
  // one these are not focusable at all. Its click handler already calls preventDefault().
  const linkProps = (item, className) => ({
    to: item.to,
    href: `#${item.to}`,
    smooth: true,
    duration: 420,
    offset: NAV_OFFSET,
    spy: true,
    activeClass: 'is-active',
    className,
  });

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="page header-inner">
          <Link to="home" href="#home" smooth={true} duration={420} className="wordmark">
            Prashant Kumar
          </Link>

          <nav className="nav" aria-label="Primary">
            {navItems.map(item => (
              <Link key={item.to} {...linkProps(item, 'nav-item')}>{item.label}</Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              type="button"
              ref={menuButtonRef}
              className="icon-btn menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`scrim${menuOpen ? ' scrim--open' : ''}`} onClick={closeMenu} />
      <nav
        id="mobile-nav"
        ref={drawerRef}
        className={`drawer${menuOpen ? ' drawer--open' : ''}`}
        aria-label="Mobile"
        {...(menuOpen ? {} : { inert: '' })}
      >
        {navItems.map(item => (
          <Link key={item.to} {...linkProps(item, 'drawer-item')} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;

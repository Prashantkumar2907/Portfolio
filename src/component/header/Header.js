import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { lockScroll, unlockScroll } from '../../utils/scrollLock';
import './header.css';

const navItems = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const SCROLLED_AT = 30;

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const openMenu = useCallback(() => setMenuOpen(true), []);

  useEffect(() => {
    if (!menuOpen) return;
    lockScroll();
    // The drawer slides off-screen with `right: -280px` rather than unmounting, so its links
    // stayed in the tab order while closed. `inert` below removes them; moving focus into the
    // drawer on open and back to the button on close keeps keyboard users oriented.
    const firstLink = drawerRef.current?.querySelector('a');
    firstLink?.focus();

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

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="home" smooth={true} duration={500} href="#home" className="logo" aria-label="Back to top">
            PK<span className="logo-dot">.</span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="nav-link"
                activeClass="active"
                spy={true}
                href={`#${item.to}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              onClick={menuOpen ? closeMenu : openMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <nav
        id="mobile-nav"
        ref={drawerRef}
        className={`nav-mobile ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile"
        {...(menuOpen ? {} : { inert: '' })}
      >
        {navItems.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-60}
            className="nav-mobile-link"
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            href={`#${item.to}`}
            style={{ animationDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;

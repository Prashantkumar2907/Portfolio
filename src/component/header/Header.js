import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './header.css';

const navItems = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="home" smooth={true} duration={500} className="logo" style={{ cursor: 'pointer' }}>
            PK<span className="logo-dot">.</span>
          </Link>

          <nav className="nav-desktop">
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
              className="menu-toggle"
              onClick={menuOpen ? closeMenu : openMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
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

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="home" smooth={true} duration={500} style={{cursor:'pointer'}}>
            {'</> PRASHANT'}
          </Link>
        </div>
        <nav className="nav-menu">
          <Link to="home" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>About</Link>
          <Link to="skills" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>Skills</Link>
          <Link to="experience" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>Experience</Link>
          <Link to="projects" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} offset={-55} className="nav-link" activeClass="active" spy={true}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

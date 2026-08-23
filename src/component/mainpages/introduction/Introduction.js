import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './introduction.css';

const stats = [
  { value: '2+', label: 'Years Exp.' },
  { value: '5+', label: 'Products Shipped' },
  { value: '10+', label: 'Projects' },
  { value: '3+', label: 'AI Systems' },
];

const Introduction = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" />
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </span>
          <h1 className="hero-name">
            Prashant Kumar
          </h1>
          <h2 className="hero-role">
            <Typewriter
              words={['Full-Stack AI Engineer', 'Software Engineer', 'Frontend Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>
          <p className="hero-desc">
            Building intelligent systems with LLM-driven multi-agent orchestration, 
            scalable full-stack architectures, and seamless user experiences.
          </p>

          <div className="hero-actions">
            <Link to="contact" smooth={true} duration={500} offset={-60} className="btn-primary">
              Get in Touch
            </Link>
            <a href="/Prashant_Resume.pdf" download className="btn-outline">
              Download CV
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Prashantkumar2907" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/prashant-kumar-ab124122a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:mishraprashant2002@gmail.com" aria-label="Email"><FiMail /></a>
          </div>

          {/* Stats bar */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {stats.map((s, i) => (
              <div className="hero-stat" key={i}>
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-ring">
            <img src={require('../assets/image-600.jpg')} alt="Prashant Kumar" width="280" height="280" fetchpriority="high" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <Link to="about" smooth={true} duration={500} offset={-60} className="scroll-hint" aria-label="Scroll down">
        <FiChevronDown />
      </Link>
    </section>
  );
};

export default Introduction;

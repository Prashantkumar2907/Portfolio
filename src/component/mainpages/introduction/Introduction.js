import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Introimage from '../assets/image.jpg'; 
import './introduction.css';
import { Link } from 'react-scroll';

const Introduction = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="greeting">Hi There,</h2>
          <h1 className="name">I'm <span>Prashant Kumar</span></h1>
          <h3 className="typing-text">
            I am a{' '}
            <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>
              <Typewriter
                words={['AI Systems Engineer', 'Software Engineer', 'Full-Stack Developer']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p className="hero-desc">
            Dynamic AI Systems Engineer and Full-Stack Developer specializing in multi-agent orchestration, LLM integration, and scalable cloud solutions.
          </p>
          <Link to="about" smooth={true} duration={500} offset={-80} className="cta-button">
            About Me 
          </Link>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="img-wrapper">
             <img src={Introimage} alt="Prashant Kumar" />
          </div>
        </motion.div>
      </div>
      
    </section>
  );
}

export default Introduction;

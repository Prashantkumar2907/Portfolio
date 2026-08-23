import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText, FiDownload, FiX, FiMapPin, FiCalendar, FiBriefcase, FiCode, FiExternalLink } from 'react-icons/fi';
import './about.css';

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isResumeOpen]);

  const quickFacts = [
    { icon: <FiBriefcase />, label: 'Role', value: 'Full-Stack AI Engineer' },
    { icon: <FiMapPin />, label: 'Location', value: 'Bangalore, India' },
    { icon: <FiCalendar />, label: 'Experience', value: '2+ Years' },
    { icon: <FiCode />, label: 'Projects Shipped', value: '10+' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img src={require('../assets/image-600.jpg')} alt="Prashant Kumar" width="280" height="280" loading="lazy" />
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="about-bio">
              Full-Stack AI Engineer with 2+ years building production systems that ship and scale.
              Delivered an end-to-end AI claims automation platform at <strong>DentalX</strong> that
              automates the full claim lifecycle — saving hours of manual review per day. Shipped 
              <strong> Bharat Briefs</strong> to the Google Play Store, an LLM-powered news app with 
              multilingual summarization. Across five client platforms at StackPro, I've built multi-agent orchestration 
              systems, RAG pipelines, real-time dashboards, and voice AI integrations using React, 
              FastAPI, GCP, and Vertex AI.
            </p>

            <div className="quick-facts">
              {quickFacts.map((fact, i) => (
                <div className="fact-item" key={i}>
                  <span className="fact-icon">{fact.icon}</span>
                  <div>
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <div className="social-links">
                <a href="https://www.linkedin.com/in/prashant-kumar-ab124122a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="https://github.com/Prashantkumar2907" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              </div>
              <div className="resume-actions">
                <button className="btn-resume" onClick={() => setIsResumeOpen(true)}>
                  <FiFileText /> View Resume
                </button>
                <a href="/Prashant_Resume.pdf" download className="btn-download">
                  <FiDownload /> Download
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="resume-overlay" onClick={() => setIsResumeOpen(false)}>
          <motion.div
            className="resume-modal"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="resume-header">
              <h3>Resume — Prashant Kumar</h3>
              <div className="resume-header-actions">
                <a href="/Prashant_Resume.pdf" target="_blank" rel="noreferrer" className="btn-modal-newtab">
                  <FiExternalLink /> Open
                </a>
                <a href="/Prashant_Resume.pdf" download className="btn-modal-download">
                  <FiDownload /> Download
                </a>
                <button className="btn-close" onClick={() => setIsResumeOpen(false)} aria-label="Close">
                  <FiX />
                </button>
              </div>
            </div>
            <div className="resume-body">
              <iframe
                src="/Prashant_Resume.pdf#view=FitH&navpanes=0&toolbar=0"
                title="Resume"
                width="100%"
                height="100%"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default About;


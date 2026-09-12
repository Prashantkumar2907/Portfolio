import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText, FiDownload, FiX, FiMapPin, FiCalendar, FiBriefcase, FiLayers, FiExternalLink } from 'react-icons/fi';
import { lockScroll, unlockScroll } from '../../../utils/scrollLock';
import './about.css';

const RESUME_URL = '/Prashant_Resume.pdf';

// Every value here is checkable against the resume and the Experience section below.
// "10+ projects shipped" was here before and matched nothing on the page.
const quickFacts = [
  { icon: <FiBriefcase />, label: 'Role', value: 'SDE-2 at StackPro' },
  { icon: <FiMapPin />, label: 'Location', value: 'Bangalore, India' },
  { icon: <FiCalendar />, label: 'Experience', value: '2 Years' },
  { icon: <FiLayers />, label: 'Shipped', value: '5 client platforms' },
];

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const dialogRef = useRef(null);

  // <dialog>.showModal() puts the dialog in the top layer and makes everything behind it
  // inert, so focus stays inside and Esc closes it without a hand-written focus trap.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isResumeOpen && !dialog.open) {
      dialog.showModal();
      lockScroll();
      return () => unlockScroll();
    }
    if (!isResumeOpen && dialog.open) dialog.close();
  }, [isResumeOpen]);

  const closeResume = () => setIsResumeOpen(false);

  // Clicking the backdrop lands on the dialog element itself, never on its children.
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) closeResume();
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <img src={require('../assets/image-600.jpg')} alt="Prashant Kumar" width="280" height="280" loading="lazy" />
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="about-bio">
              Software Development Engineer II at <strong>StackPro</strong>, with 2 years building
              production systems that ship and scale. Delivered an end-to-end AI claims automation
              platform at <strong>DentalX</strong> that automates the full claim lifecycle — saving
              hours of manual review per day. Shipped <strong>Bharat Briefs</strong> to the Google
              Play Store, an LLM-powered news app with multilingual summarization. Across five client
              platforms at StackPro, I've built multi-agent orchestration systems, RAG pipelines,
              real-time dashboards, and voice AI integrations using React, FastAPI, GCP, and Vertex AI.
            </p>

            <div className="quick-facts">
              {quickFacts.map((fact) => (
                <div className="fact-item" key={fact.label}>
                  <span className="fact-icon" aria-hidden="true">{fact.icon}</span>
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
                  <FiFileText aria-hidden="true" /> View Resume
                </button>
                <a href={RESUME_URL} download className="btn-download">
                  <FiDownload aria-hidden="true" /> Download
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="resume-dialog"
        aria-labelledby="resume-dialog-title"
        onClose={closeResume}
        onClick={handleDialogClick}
      >
        <div className="resume-header">
          <h3 id="resume-dialog-title">Resume — Prashant Kumar</h3>
          <div className="resume-header-actions">
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-modal-newtab">
              <FiExternalLink aria-hidden="true" /> Open
            </a>
            <a href={RESUME_URL} download className="btn-modal-download">
              <FiDownload aria-hidden="true" /> Download
            </a>
            <button className="btn-close" onClick={closeResume} aria-label="Close resume">
              <FiX />
            </button>
          </div>
        </div>
        <div className="resume-body">
          {/* iOS Safari renders only the first page of a PDF in an iframe and will not scroll
              it, so on small screens the embed is replaced by explicit open/download actions. */}
          <iframe
            className="resume-frame"
            src={`${RESUME_URL}#view=FitH&navpanes=0&toolbar=0`}
            title="Resume — Prashant Kumar"
          />
          <div className="resume-fallback">
            <FiFileText className="resume-fallback-icon" aria-hidden="true" />
            <p>Inline preview isn't supported on this device.</p>
            <div className="resume-fallback-actions">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn-resume">Open resume</a>
              <a href={RESUME_URL} download className="btn-download">Download PDF</a>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default About;

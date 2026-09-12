import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import './resume.css';

const RESUME_URL = '/Prashant_Resume.pdf';

const Resume = () => {
  const reduced = useReducedMotion();

  return (
    <section id="resume" className="resume">
      <div className="page section-grid">
        <h2 className="label">Résumé</h2>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="prose resume-note">
            One page, plain text, no images — the same file an applicant tracking system parses.
          </p>

          <div className="resume-actions">
            <a className="btn btn--solid" href={RESUME_URL} download>
              <FiDownload aria-hidden="true" /> Download PDF
            </a>
            <a className="btn btn--ghost" href={RESUME_URL} target="_blank" rel="noreferrer">
              Open in new tab <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>

          {/* iOS Safari renders only the first page of a PDF in an iframe and will not scroll
              it, so below 900px the embed is dropped rather than shown as a dead grey box. */}
          <div className="resume-preview">
            <iframe
              className="resume-frame"
              src={`${RESUME_URL}#view=FitH&navpanes=0&toolbar=0`}
              title="Résumé — Prashant Kumar"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import './introduction.css';

const RESUME_URL = '/Prashant_Resume.pdf';

// Facts, not stat counters. Every line is checkable against the resume.
const facts = [
  { k: 'Now', v: 'SDE-2 at StackPro' },
  { k: 'Based', v: 'Bengaluru, India · UTC+5:30' },
  { k: 'Focus', v: 'Python · FastAPI · GCP · LLM & RAG' },
];

const links = [
  { label: 'GitHub', href: 'https://github.com/Prashantkumar2907' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashant-kumar-ab124122a' },
  { label: 'Email', href: 'mailto:mishraprashant2002@gmail.com' },
];

const Introduction = () => {
  const reduced = useReducedMotion();
  const rise = (delay = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 14 },
    animate: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="home" className="intro">
      <div className="page intro-grid">
        <div className="intro-main">
          <motion.p className="mono intro-eyebrow" {...rise(0)}>
            Backend &amp; AI systems engineer
          </motion.p>

          <motion.h1 className="intro-name" {...rise(0.05)}>
            Prashant Kumar
          </motion.h1>

          <motion.p className="intro-lede" {...rise(0.1)}>
            I build backends that put language models to work — multi-agent pipelines,
            retrieval systems, and the unglamorous orchestration that keeps them reliable
            in production.
          </motion.p>

          <motion.p className="prose intro-bio" {...rise(0.15)}>
            Two years at <strong>StackPro</strong>, from intern to SDE-2, across five client
            platforms. Most recently I owned the rebuild of <strong>DentalX</strong>, a
            healthcare claims platform: a legacy Laravel backend migrated to async FastAPI, a
            five-stage LLM agent pipeline handling the claim lifecycle, and a RAG engine reading
            payer policy documents to drive adjudication. I also shipped{' '}
            <a className="link" href="https://play.google.com/store/apps/details?id=com.prashant.tldrbharat" target="_blank" rel="noreferrer">
              Bharat Briefs
            </a>{' '}
            to the Play Store.
          </motion.p>

          <motion.dl className="intro-facts" {...rise(0.2)}>
            {facts.map(f => (
              <div className="fact" key={f.k}>
                <dt className="mono fact-k">{f.k}</dt>
                <dd className="fact-v">{f.v}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.div className="intro-actions" {...rise(0.25)}>
            <a className="btn btn--solid" href={RESUME_URL} download>
              <FiDownload aria-hidden="true" /> Download résumé
            </a>
            <nav className="intro-links" aria-label="Elsewhere">
              {links.map(l => (
                <a
                  key={l.label}
                  className="intro-link"
                  href={l.href}
                  {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
                >
                  {l.label}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        <motion.div
          className="intro-portrait"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={require('../assets/image-600.jpg')}
            alt="Prashant Kumar"
            width="300"
            height="360"
            fetchpriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;

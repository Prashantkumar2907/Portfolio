import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import './projects.css';

// DentalX is deliberately not here. It is StackPro client work and belongs in Experience;
// an earlier version also linked a client-owned private beta from a personal site.
const projects = [
  {
    title: 'Bharat Briefs',
    type: 'AI news aggregator',
    description:
      'Fetches articles from multiple sources and generates three-point summaries for quick reading, in several languages. Live on Google Play.',
    points: [
      'LLM summarisation pipeline over long-form articles',
      'Multilingual digests with categorised feeds',
      'Trending system driven by engagement signals',
    ],
    stack: ['React Native', 'FastAPI', 'LLM APIs', 'MongoDB'],
    href: 'https://play.google.com/store/apps/details?id=com.prashant.tldrbharat',
    hrefLabel: 'Play Store',
  },
  {
    title: 'AllExamsPYQ',
    type: 'Exam practice platform',
    description:
      'Previous-year exam papers with bookmarking and per-topic performance analytics, behind a responsive cross-device client.',
    points: [
      'Per-topic performance analytics',
      'Offline-friendly practice sessions',
      'Containerised deploy on AWS',
    ],
    stack: ['React Native (Expo)', 'Django REST', 'PostgreSQL', 'Docker', 'AWS'],
    href: null,
    hrefLabel: null,
  },
];

const Projects = () => {
  const reduced = useReducedMotion();

  return (
    <section id="projects" className="projects">
      <div className="page section-grid">
        <h2 className="label">Projects</h2>

        <div className="project-list">
          {projects.map((p, i) => (
            <motion.article
              className="entry project"
              key={p.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="entry-aside">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-type">{p.type}</p>
                {p.href && (
                  <a className="project-link" href={p.href} target="_blank" rel="noreferrer">
                    {p.hrefLabel}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
              <div className="entry-body">
                <p className="project-desc">{p.description}</p>
                <ul className="project-points">
                  {p.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
                <p className="mono project-stack">{p.stack.join('  ·  ')}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiSmartphone } from 'react-icons/fi';
import './projects.css';

// DentalX was removed from this section deliberately. It is StackPro CLIENT work, not a
// personal project -- it belongs in Experience, where it now lives. The old entry also
// also linked directly to a client-owned non-public beta environment; publishing
// that from a personal site is a confidentiality risk and reads as poor judgement.
const projects = [
  {
    title: 'Bharat Briefs',
    subtitle: 'AI News Aggregator App',
    description:
      'AI-powered news aggregation platform that fetches articles from multiple sources and generates concise 3-point summaries for quick consumption across multiple languages. Shipped to Android users via Google Play.',
    tech: ['React Native', 'FastAPI', 'LLMs', 'MongoDB'],
    highlights: [
      'LLM-based summarization pipeline',
      'Multilingual content delivery',
      'Engagement-based trending system',
    ],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.prashant.tldrbharat&pcampaignid=web_share',
    demoLabel: 'Play Store',
    demoIcon: 'playstore',
  },
  {
    title: 'AllExamsPYQ',
    subtitle: 'Exam Practice Platform',
    description:
      'Platform for practising previous-year exam papers, with bookmarking and per-topic performance analytics. Containerised services deployed on AWS behind a responsive cross-device client.',
    tech: ['React Native (Expo)', 'Django REST', 'PostgreSQL', 'Docker', 'AWS'],
    highlights: [
      'Per-topic performance analytics',
      'Offline-friendly practice sessions',
      'Containerised deploy on AWS',
    ],
    github: null,
    demo: null,
    demoLabel: null,
    demoIcon: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                {project.github && (
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer" aria-label="Source code">
                    <FiGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} className="project-link project-link--primary" target="_blank" rel="noreferrer" aria-label={project.demoLabel}>
                    {project.demoIcon === 'playstore' ? <FiSmartphone /> : <FiExternalLink />}
                    {project.demoLabel}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

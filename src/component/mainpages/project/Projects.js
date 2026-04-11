import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './projects.css';

const projects = [
  {
    title: 'Bharat Briefs',
    subtitle: 'AI News Aggregator App',
    description:
      'AI-powered news aggregation platform that fetches articles from multiple sources and generates concise 3-point summaries for quick consumption across multiple languages.',
    tech: ['React.js', 'FastAPI', 'LLMs', 'MongoDB'],
    highlights: [
      'LLM-based summarization pipeline',
      'Multilingual content delivery',
      'Engagement-based trending system',
    ],
    github: '#',
    demo: '#',
  },
  {
    title: 'DentalX Platform',
    subtitle: 'AI Claims Automation',
    description:
      'Full-stack AI claims automation using LLM-driven multi-agent orchestration for auto-validation, data correction, submission, and manual review routing.',
    tech: ['FastAPI', 'BigQuery', 'Vertex AI', 'Twilio'],
    highlights: [
      'End-to-end claim lifecycle agents',
      'RAG-based policy analysis',
      'Voice-based patient outreach',
    ],
    github: '#',
    demo: '#',
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
                <a href={project.github} className="project-link" aria-label="Source code">
                  <FiGithub /> Code
                </a>
                <a href={project.demo} className="project-link" aria-label="Live demo">
                  <FiExternalLink /> Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

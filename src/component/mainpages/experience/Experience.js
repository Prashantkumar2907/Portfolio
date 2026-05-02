import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './experience.css';

const experiences = [
  {
    title: 'Full-Stack AI Engineer',
    company: 'DentalX',
    type: 'Claims Automation Platform',
    date: 'Feb 2026 – Present',
    location: 'Bangalore, India',
    achievement: 'Automated full claim lifecycle end-to-end',
    points: [
      'Led end-to-end development of a full-stack AI claims platform, rebuilding frontend (React), backend (FastAPI), and deployment on GCP (Cloud Run, Vertex AI).',
      'Designed LLM-driven multi-agent system automating complete claim lifecycle: validation, auto-correction, submission, and manual review routing.',
      'Built RAG-based decision engine using Vertex AI Search to analyze policy documents and automate claim adjudication workflows.',
      'Developed voice-based patient outreach agent using Twilio + ElevenLabs for automated payment interactions.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'CyborgIntell',
    type: 'Product Configurator, AR App',
    date: 'Aug 2025 – Jan 2026',
    location: 'Bangalore, India',
    achievement: 'Built ML pipeline deployment platform',
    points: [
      'Led development of a platform for converting ML pipelines into deployable applications with end-to-end lifecycle tracking.',
      'Implemented cross-application communication using iframe and postMessage for secure data exchange between micro-apps.',
      'Developed interactive dashboards using ApexCharts/Recharts for monitoring model health and performance.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'SaiShiko',
    type: 'Survey & Analytics Platform',
    date: 'May 2025 – Aug 2025',
    location: 'Bangalore, India',
    achievement: 'Delivered survey platform with role-based auth',
    points: [
      'Developed a full-stack survey and analytics platform using React.js and Django REST Framework.',
      'Implemented role-based authentication and secure email login workflows with automated notifications.',
      'Built interactive dashboards with filtering, drilldowns, and export capabilities.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'CaseX',
    type: 'Crime Reporting Platform',
    date: 'Feb 2025 – May 2025',
    location: 'Bangalore, India',
    achievement: 'Designed UX for high-stress reporting flows',
    points: [
      'Developed a crime-reporting platform with guided multi-step workflows and chat-based reporting interface.',
      'Built geolocation-based UI for incident mapping and metadata capture.',
      'Designed intuitive user flows optimized for high-stress reporting scenarios.',
    ],
  },
  {
    title: 'SDE Intern',
    company: 'CyborgIntell',
    type: 'Enterprise Modules',
    date: 'Sep 2024 – Jan 2025',
    location: 'Bangalore, India',
    achievement: 'Improved performance with memoization & lazy loading',
    points: [
      'Developed reusable UI components and extended visual workflow builders using React Flow with custom nodes.',
      'Built analytics dashboards and improved performance using lazy loading, memoization, and optimized state handling.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className="timeline-marker">
                <FiBriefcase />
              </div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">
                      {exp.company} <span className="timeline-type">— {exp.type}</span>
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">{exp.date}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                {exp.achievement && (
                  <div className="timeline-achievement">
                    <span className="achievement-pill">⚡ {exp.achievement}</span>
                  </div>
                )}
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

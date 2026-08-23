import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './experience.css';

// ONE EMPLOYER. The previous version listed DentalX, CyborgIntell, SaiShiko and CaseX as
// four separate companies with four invented job titles ("Full-Stack AI Engineer at
// DentalX", "Frontend Developer at CaseX"). Those are StackPro CLIENT ENGAGEMENTS, and the
// real titles were the SDE progression below. Presenting them as employers contradicted
// both the resume and LinkedIn, read as five jobs in two years, and inflated the titles.
const employer = {
  company: 'StackPro',
  location: 'Bengaluru, India',
  span: 'Sep 2024 – Present',
  roles: [
    { title: 'Software Development Engineer II', date: 'Jun 2026 – Present' },
    { title: 'Software Development Engineer I', date: 'Jun 2025 – May 2026' },
    { title: 'Software Development Engineer Intern', date: 'Sep 2024 – May 2025' },
  ],
};

const engagements = [
  {
    name: 'DentalX',
    type: 'AI Claims Automation Platform',
    date: 'Feb 2026 – Present',
    achievement: 'Automated the full claim lifecycle end to end',
    points: [
      'Owned the end-to-end rebuild: migrated a legacy Laravel backend to async FastAPI, built the React frontend, and deployed on GCP Cloud Run and Vertex AI.',
      'Designed an LLM multi-agent system automating the claim lifecycle across five stages: validation, auto-correction, submission, manual-review routing and patient outreach.',
      'Built a RAG decision engine on Vertex AI Search that reads payer policy documents to drive automated claim adjudication.',
      'Implemented fault-tolerant async orchestration across three external systems: BigQuery, FHIR APIs and third-party payer services.',
      'Shipped a voice outreach agent on Twilio and ElevenLabs for automated patient payment follow-ups.',
    ],
  },
  {
    name: 'CyborgIntell',
    type: 'ML Pipeline Configurator & AR Application',
    date: 'Aug 2025 – Jan 2026',
    achievement: 'Built an ML pipeline deployment platform',
    points: [
      'Led development of a platform converting ML pipelines into deployable applications with end-to-end lifecycle tracking.',
      'Built multi-step workflow UIs visualising pipeline construction, build status and deployment metrics.',
      'Implemented secure cross-application messaging between micro-frontends via postMessage.',
    ],
  },
  {
    name: 'SaiShiko',
    type: 'Survey & Analytics Platform',
    date: 'May 2025 – Aug 2025',
    achievement: 'Moved report generation off the request path',
    points: [
      'Built a full-stack survey and analytics platform on React and Django REST Framework.',
      'Added role-based authentication and moved report generation off the request path with Celery workers.',
      'Built interactive dashboards with filtering, drilldowns and export.',
    ],
  },
  {
    name: 'CaseX',
    type: 'Crime Reporting Platform',
    date: 'Feb 2025 – May 2025',
    achievement: 'Designed intake flows for high-stress use',
    points: [
      'Built a guided multi-step crime-reporting flow with a chat-based intake interface.',
      'Implemented geolocation-based incident mapping and validated evidence upload.',
    ],
  },
  {
    name: 'CyborgIntell',
    type: 'MRM, MLFlux, ODA & Loan Collection',
    date: 'Sep 2024 – Jan 2025',
    achievement: 'Cut render cost with lazy loading and memoisation',
    points: [
      'Extended React Flow workflow builders with custom node types and dynamic interactions.',
      'Built component libraries and dashboards used across four enterprise modules, cutting render cost with lazy loading and memoisation.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <motion.div
          className="employer-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="employer-header">
            <div>
              <h3 className="employer-name">{employer.company}</h3>
              <p className="employer-sub">Bengaluru, India &middot; {employer.span}</p>
            </div>
            <span className="achievement-pill">Intern &rarr; SDE-2 in 21 months</span>
          </div>
          <ul className="employer-roles">
            {employer.roles.map((r) => (
              <li key={r.title}>
                <span className="role-title">{r.title}</span>
                <span className="role-date">{r.date}</span>
              </li>
            ))}
          </ul>
          <p className="employer-note">Client platforms delivered at StackPro:</p>
        </motion.div>

        <div className="timeline">
          {engagements.map((exp, index) => (
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
                    <h3 className="timeline-title">{exp.name}</h3>
                    <p className="timeline-company">
                      <span className="timeline-type">{exp.type}</span>
                    </p>
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-date">{exp.date}</span>
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

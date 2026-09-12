import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './experience.css';

// ONE EMPLOYER. An earlier version listed DentalX, CyborgIntell, SaiShiko and CaseX as four
// separate companies with invented titles. They are StackPro CLIENT ENGAGEMENTS, and
// presenting them as employers read as five jobs in two years and contradicted both the
// résumé and LinkedIn.
const employer = {
  name: 'StackPro',
  location: 'Bengaluru, India',
  span: 'Sep 2024 — Present',
  note: 'Intern to SDE-2 in 21 months',
  roles: [
    { title: 'Software Development Engineer II', date: 'Jun 2026 — Present', current: true },
    { title: 'Software Development Engineer I', date: 'Jun 2025 — May 2026' },
    { title: 'Software Development Engineer Intern', date: 'Sep 2024 — May 2025' },
  ],
};

const engagements = [
  {
    name: 'DentalX',
    type: 'AI claims automation platform',
    date: 'Feb 2026 — Present',
    points: [
      'Owned the end-to-end rebuild: migrated a legacy Laravel backend to async FastAPI, built the React frontend, and deployed on GCP Cloud Run and Vertex AI.',
      'Designed an LLM multi-agent system automating the claim lifecycle across five stages — validation, auto-correction, submission, manual-review routing and patient outreach.',
      'Built a RAG decision engine on Vertex AI Search that reads payer policy documents to drive automated claim adjudication.',
      'Implemented fault-tolerant async orchestration across three external systems: BigQuery, FHIR APIs and third-party payer services.',
      'Shipped a voice outreach agent on Twilio and ElevenLabs for automated patient payment follow-ups.',
    ],
  },
  {
    name: 'CyborgIntell',
    type: 'ML pipeline configurator & AR application',
    date: 'Aug 2025 — Jan 2026',
    points: [
      'Led development of a platform converting ML pipelines into deployable applications with end-to-end lifecycle tracking.',
      'Built multi-step workflow UIs visualising pipeline construction, build status and deployment metrics.',
      'Implemented secure cross-application messaging between micro-frontends via postMessage.',
    ],
  },
  {
    name: 'SaiShiko',
    type: 'Survey & analytics platform',
    date: 'May 2025 — Aug 2025',
    points: [
      'Built a full-stack survey and analytics platform on React and Django REST Framework.',
      'Added role-based authentication and moved report generation off the request path with Celery workers.',
      'Built interactive dashboards with filtering, drilldowns and export.',
    ],
  },
  {
    name: 'CaseX',
    type: 'Crime reporting platform',
    date: 'Feb 2025 — May 2025',
    points: [
      'Built a guided multi-step reporting flow with a chat-based intake interface.',
      'Implemented geolocation-based incident mapping and validated evidence upload.',
    ],
  },
  {
    name: 'CyborgIntell',
    type: 'MRM, MLFlux, ODA & loan collection',
    date: 'Sep 2024 — Jan 2025',
    points: [
      'Extended React Flow workflow builders with custom node types and dynamic interactions.',
      'Built component libraries and dashboards used across four enterprise modules, cutting render cost with lazy loading and memoisation.',
    ],
  },
];

const Experience = () => {
  const reduced = useReducedMotion();
  const reveal = (i = 0) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
    whileInView: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section id="experience" className="experience">
      <div className="page section-grid">
        <h2 className="label">Experience</h2>

        <div>
          <motion.div className="entry employer" {...reveal(0)}>
            <div className="entry-aside">
              <h3 className="employer-name">{employer.name}</h3>
              <p className="mono employer-meta">{employer.location}</p>
              <p className="mono employer-meta">{employer.span}</p>
            </div>
            <div className="entry-body">
              <ol className="ladder">
                {employer.roles.map(r => (
                  <li className={`rung${r.current ? ' rung--current' : ''}`} key={r.title}>
                    <span className="rung-title">{r.title}</span>
                    <span className="mono rung-date">{r.date}</span>
                  </li>
                ))}
              </ol>
              <p><span className="employer-note">{employer.note}</span></p>
            </div>
          </motion.div>

          <h3 className="mono engagements-label">Client platforms delivered</h3>

          <div className="engagements">
            {engagements.map((e, i) => (
              <motion.article className="entry engagement" key={`${e.name}-${e.date}`} {...reveal(i)}>
                <div className="entry-aside">
                  <h4 className="engagement-name">{e.name}</h4>
                  <p className="engagement-type">{e.type}</p>
                  <p className="mono engagement-date">{e.date}</p>
                </div>
                <div className="entry-body">
                  <ul className="engagement-points">
                    {e.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

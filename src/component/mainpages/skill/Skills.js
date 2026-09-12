import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './skills.css';

// Grouped exactly as the résumé groups them, so a recruiter reading both sees one story.
// No vendor logos: a wall of coloured brand icons is the single clearest tell of a
// generated portfolio, and it makes scanning the actual words harder.
const groups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Django REST Framework', 'Node.js', 'REST API design', 'JWT / OAuth2', 'Celery', 'WebSockets'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery'],
  },
  {
    title: 'Frontend',
    items: ['React', 'React Native (Expo)', 'React Flow', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'AI & Cloud',
    items: ['LLM orchestration', 'Multi-agent architectures', 'RAG (Vertex AI Search)', 'GCP (Cloud Run, Vertex AI)', 'AWS (EC2, S3, Cognito)', 'Docker', 'CI/CD'],
  },
];

const Skills = () => {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="skills">
      <div className="page section-grid">
        <h2 className="label">Skills</h2>

        <dl className="skill-rows">
          {groups.map((g, i) => (
            <motion.div
              className="skill-row"
              key={g.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <dt className="mono skill-title">{g.title}</dt>
              <dd className="skill-items">
                {g.items.map(item => (
                  <span className="skill-item" key={item}>{item}</span>
                ))}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Skills;

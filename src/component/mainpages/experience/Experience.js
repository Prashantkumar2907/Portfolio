import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkOutline } from "react-icons/md";
import './experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "AI Systems Engineer (LLM & Agent Orchestration)",
      company: "DentalX",
      date: "Feb 2026 – Present",
      location: "Bangalore",
      points: [
        "Architected an AI-powered claims automation platform using FastAPI with LLM-driven multi-agent orchestration.",
        "Built dynamic tool-based execution integrating BigQuery, FHIR APIs, and RAG-based systems via Vertex AI.",
        "Implemented voice-based patient outreach using Twilio and ElevenLabs for automated payment workflows."
      ]
    },
    {
      title: "Software Engineer",
      company: "CyborgIntell",
      date: "Aug 2025 – Jan 2026",
      location: "Bangalore",
      points: [
        "Led development of a platform to convert ML pipelines into deployable apps.",
        "Implemented cross-app communication via iframe and postMessage for secure data exchange.",
        "Developed interactive dashboards using ApexCharts/Recharts for model health monitoring."
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "SaiShiko",
      date: "May 2025 – Aug 2025",
      location: "Bangalore",
      points: [
        "Developed a full-stack survey analytics platform using React.js and Django REST Framework.",
        "Built survey lifecycle workflows, role-based auth, and Celery-based background processing."
      ]
    },
    {
      title: "Frontend Developer",
      company: "CaseX",
      date: "Feb 2025 – May 2025",
      location: "Bangalore",
      points: [
        "Developed a crime-reporting platform with geolocation-based UI for incident mapping.",
        "Implemented secure file upload flows for evidence with preview/validation in high-stress scenarios."
      ]
    },
    {
      title: "SDE Intern",
      company: "CyborgIntell",
      date: "Sep 2024 – Jan 2025",
      location: "Bangalore",
      points: [
        "Developed reusable UI components and visual builders using React Flow.",
        "Improved performance using lazy loading, memoization, and optimized state handling."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container" style={{maxWidth: '100%'}}>
        <h2 className="section-title" style={{color: 'white'}}>Experience</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <VerticalTimeline animate={true} lineColor="var(--primary-color)">
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#1e293b', color: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', borderTop: '3px solid var(--primary-color)' }}
                contentArrowStyle={{ borderRight: '7px solid  #1e293b' }}
                date={exp.date}
                dateClassName="timeline-date-text"
                iconStyle={{ background: 'var(--primary-color)', color: '#fff', boxShadow: '0 0 0 4px #0f172a, inset 0 2px 0 rgba(0,0,0,.08), 0 4px 10px rgba(0,0,0,.5)' }}
                icon={<MdWorkOutline />}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <h3 className="vertical-timeline-element-title" style={{color: 'var(--primary-color)', fontSize: '1.4rem', fontWeight: 'bold'}}>{exp.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle" style={{marginTop: '5px', fontWeight: '500', color: '#cbd5e1'}}>{exp.company} - {exp.location}</h4>
                  <ul style={{marginTop: '15px', paddingLeft: '20px', fontSize: '0.95rem', lineHeight: '1.6'}}>
                    {exp.points.map((point, i) => (
                      <li key={i} style={{marginBottom: '8px', color: '#f8fafc'}}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience;

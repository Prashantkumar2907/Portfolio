import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Bharat Briefs — AI News Aggregator App",
      description: "An AI-powered news aggregation platform fetching articles from multiple sources, generating concise 3-point summaries for quick consumption across multiple languages.",
      tech: ["React.js", "FastAPI", "LLMs", "MongoDB"],
      features: [
        "LLM-based summarization pipeline",
        "Multilingual content delivery",
        "Community-driven discussions",
        "Engagement-based trending system"
      ],
      github: "#", 
      demo: "#"    
    },
    {
      title: "DentalX - Claims Automation Platform",
      description: "AI-powered claims automation using LLM-driven multi-agent orchestration for auto-validation, data correction, and manual review routing.",
      tech: ["FastAPI", "BigQuery", "Vertex AI", "Twilio"],
      features: [
        "End-to-end claim lifecycle agents",
        "RAG-based policy analysis",
        "Voice-based patient outreach"
      ],
      github: "#", 
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} className="link-btn" title="Source Code">
                  <FaGithub /> Source
                </a>
                <a href={project.demo} className="link-btn demo-btn" title="Live Demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;

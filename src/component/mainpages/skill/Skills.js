import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaDocker
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss,
  SiDjango, SiFastapi, SiMongodb, SiRedis, SiGooglecloud,
  SiPostgresql
} from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';
import './skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'React Native', icon: <FaReact /> },
      { name: 'React Flow', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Backend & Cloud',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'AWS', icon: <FaAws /> },
      { name: 'GCP', icon: <SiGooglecloud /> },
      { name: 'Docker', icon: <FaDocker /> },
    ],
  },
  {
    title: 'AI & Databases',
    skills: [
      { name: 'LLM / RAG', icon: <BsRobot /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Redis', icon: <SiRedis /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category, idx) => (
            <motion.div
              className="skill-category"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div className="skill-chip" key={i}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

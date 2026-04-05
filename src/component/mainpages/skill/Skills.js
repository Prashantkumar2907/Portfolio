import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiAngular, SiTailwindcss, SiDjango, SiFastapi, SiMongodb, SiRedis, SiGooglecloud } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import './skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava color="#e32c2e" /> },
        { name: "Python", icon: <FaPython color="#3776ab" /> },
        { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact color="#61dafb" /> },
        { name: "Angular", icon: <SiAngular color="#dd0031" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" /> },
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
        { name: "Django", icon: <SiDjango color="#092e20" /> },
        { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
        { name: "AWS", icon: <FaAws color="#ff9900" /> },
        { name: "GCP", icon: <SiGooglecloud color="#4285f4" /> },
        { name: "Docker", icon: <FaDocker color="#2496ed" /> },
      ]
    },
    {
      title: "AI & Databases",
      skills: [
        { name: "LLM / RAG", icon: <BsRobot color="#a855f7" /> },
        { name: "PostgreSQL", icon: <FaDatabase color="#336791" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
        { name: "Redis", icon: <SiRedis color="#dc382d" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title text-white">Technical Skills</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              className="skill-category" 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;

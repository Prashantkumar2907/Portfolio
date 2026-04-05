import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Aboutimage from '../assets/image.jpg'; 
import { FaInstagram, FaGithub, FaFilePdf } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import './about.css';

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const toggleModal = () => {
    setIsResumeModalOpen(!isResumeModalOpen);
    if (!isResumeModalOpen) {
      document.body.style.overflow = 'hidden'; // prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-img-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src={Aboutimage} alt="Prashant Kumar" />
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Professional Summary</h3>
            <p>
              Dynamic software developer with hands-on experience specializing in full-stack development and AI multi-agent orchestration.
            </p>
            
            <ul className="about-highlights">
              <li>
                <div className="bullseye">🎯</div>
                <span><strong>Architecting AI Solutions:</strong> Engineered claims automation platforms using FastAPI, tool-based agents, and BigQuery.</span>
              </li>
              <li>
                <div className="bullseye">🎯</div>
                <span><strong>Full-Stack Expertise:</strong> Proficient in React.js, ASGI frameworks, and scalable enterprise architectures.</span>
              </li>
              <li>
                <div className="bullseye">🎯</div>
                <span><strong>Problem Solver:</strong> Proven track record of enhancing user interfaces, resolving complex issues, and delivering robust solutions tailored to client requirements.</span>
              </li>
            </ul>

            <div className="coding-profiles">
              <h4>Connect With Me:</h4>
              <div className="profile-actions">
                <div className="social-links">
                  <a href="#" target="_blank" rel="noreferrer"><CiLinkedin /></a>
                  <a href="#" target="_blank" rel="noreferrer"><FaGithub /></a>
                  <a href="#" target="_blank" rel="noreferrer"><RiTwitterXLine /></a>
                  <a href="#" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </div>
                <button className="resume-btn" onClick={toggleModal}>
                  <FaFilePdf /> View Resume
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal Overlay */}
      {isResumeModalOpen && (
        <div className="resume-modal-overlay" onClick={toggleModal}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Prashant Kumar - Resume</h3>
              <button className="close-modal" onClick={toggleModal}>&times;</button>
            </div>
            <div className="modal-body">
              <iframe 
                src="/Prashant_Resume.pdf#view=FitH&navpanes=0&toolbar=0" 
                title="Prashant Kumar Resume"
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
              >
                This browser does not support PDFs. Please download the PDF to view it.
              </iframe>
            </div>
            <div className="modal-footer">
               <a href="/Prashant_Resume.pdf" download className="download-btn">Download PDF</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About;

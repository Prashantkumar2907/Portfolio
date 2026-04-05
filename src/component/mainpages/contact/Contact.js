import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS credentials from environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; 
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
          toast.success("Message sent successfully!");
          setFormData({name: '', email: '', phone: '', message: ''});
          setIsSubmitting(false);
      }, (error) => {
          toast.error("Failed to send message. Please check credentials.");
          console.error(error);
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer position="bottom-right" autoClose={5000} />
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p>I'm open for collaboration and new opportunities. Drop a message!</p>
            
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Location</h4>
                <p>Bangalore, Karnataka, 560107, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 7004970006</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>mishraprashant2002@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group row">
                <div className="col">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="col">
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
              </div>
              <div className="form-group">
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <FaLocationArrow />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact;

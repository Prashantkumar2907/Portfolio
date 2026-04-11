import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const contactInfo = [
  { icon: <FiMapPin />, label: 'Location', value: 'Bangalore, Karnataka, India' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 7004970006' },
  { icon: <FiMail />, label: 'Email', value: 'mishraprashant2002@gmail.com' },
];

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
          console.error(error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer position="bottom-right" autoClose={4000} theme="colored" />
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          {/* Info Side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-info-desc">
              I'm open for collaboration and new opportunities. Feel free to
              reach out — I'd love to hear from you.
            </p>

            <div className="info-list">
              {contactInfo.map((item, i) => (
                <div className="info-item" key={i}>
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your message..."
              required
            />
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <FiSend size={15} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

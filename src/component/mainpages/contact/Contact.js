import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const contactInfo = [
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Bangalore, Karnataka, India',
    href: 'https://maps.google.com/?q=Bangalore,Karnataka,India',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 7004970006',
    href: 'tel:+917004970006',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'mishraprashant2002@gmail.com',
    href: 'mailto:mishraprashant2002@gmail.com',
  },
];

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _hp: '',
  });

  const validate = (data) => {
    const e = {};
    if (!data.name.trim()) e.name = 'Name is required';
    if (!data.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Enter a valid email';
    if (!data.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldErrors = validate({ ...formData, [name]: value });
    if (fieldErrors[name]) setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData._hp) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        () => {
          setSent(true);
          setFormData({ name: '', email: '', phone: '', message: '', _hp: '' });
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
                <a
                  className="info-item"
                  key={i}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noreferrer' : undefined}
                >
                  <span className="info-icon">{item.icon}</span>
                  <div>
                    <span className="info-label">{item.label}</span>
                    <span className="info-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                className="contact-success"
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <FiCheckCircle className="success-icon" />
                <h3>Message Received!</h3>
                <p>Thanks for reaching out. Prashant will get back to you within 24 hours.</p>
                <button className="btn-resume" style={{ marginTop: '16px' }} onClick={() => setSent(false)}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form"
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                noValidate
              >
                {/* Honeypot — hidden from users */}
                <input
                  type="text"
                  name="_hp"
                  value={formData._hp}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Name *"
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email *"
                      className={errors.email ? 'input-error' : ''}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                />
                <div className="form-field">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows="5"
                    placeholder="Your message... *"
                    className={errors.message ? 'input-error' : ''}
                  />
                  {errors.message && <span className="field-error">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend size={15} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;


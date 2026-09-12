import React, { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './contact.css';

const details = [
  { k: 'Email', v: 'mishraprashant2002@gmail.com', href: 'mailto:mishraprashant2002@gmail.com' },
  { k: 'Phone', v: '+91 7004970006', href: 'tel:+917004970006' },
  { k: 'Location', v: 'Bengaluru, India · UTC+5:30', href: null },
];

const EMPTY = { name: '', email: '', message: '', _hp: '' };

const validate = (data) => {
  const e = {};
  if (!data.name.trim()) e.name = 'Please enter your name.';
  if (!data.email.trim()) e.email = 'Please enter your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'That email address looks incomplete.';
  if (!data.message.trim()) e.message = 'Please write a message.';
  return e;
};

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(EMPTY);
  const reduced = useReducedMotion();

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
      // Move focus to the first problem so a keyboard or screen-reader user is taken to it
      // rather than left at a submit button that appeared to do nothing.
      formRef.current?.querySelector(`[name="${Object.keys(validationErrors)[0]}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setSendError('');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setFormData(EMPTY);
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          setSendError('That did not send. Email me directly at mishraprashant2002@gmail.com.');
          setIsSubmitting(false);
        }
      );
  };

  const field = (name) => ({
    name,
    id: `contact-${name}`,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: errors[name] ? 'is-invalid' : undefined,
  });

  return (
    <section id="contact" className="contact">
      <div className="page section-grid">
        <h2 className="label">Contact</h2>

        <motion.div
          className="contact-grid"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-aside">
            <p className="contact-lede">
              Email is the fastest way to reach me — I read everything and reply within a day.
            </p>

            <dl className="contact-details">
              {details.map(d => (
                <div className="contact-detail" key={d.k}>
                  <dt className="mono contact-k">{d.k}</dt>
                  <dd className="contact-v">
                    {d.href
                      ? <a className="link" href={d.href}>{d.v}</a>
                      : d.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {sent ? (
            <div className="contact-sent" role="status">
              <p className="contact-sent-title">Message sent.</p>
              <p className="contact-sent-body">
                Thanks for reaching out — I&apos;ll reply within a day.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setSent(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
              {/* Honeypot — hidden from people, tempting to bots. */}
              <input
                type="text"
                name="_hp"
                value={formData._hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                hidden
              />

              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input type="text" autoComplete="name" {...field('name')} />
                {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
              </div>

              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input type="email" autoComplete="email" {...field('email')} />
                {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
              </div>

              <div className="field">
                <label htmlFor="contact-message">Message</label>
                <textarea rows="6" {...field('message')} />
                {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
              </div>

              <div className="contact-submit">
                <button type="submit" className="btn btn--solid" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Send message'}
                  {!isSubmitting && <FiArrowUpRight aria-hidden="true" />}
                </button>
                {sendError && <p className="field-error" role="alert">{sendError}</p>}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

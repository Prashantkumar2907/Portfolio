import React from 'react';
import './footer.css';

const links = [
  { label: 'GitHub', href: 'https://github.com/Prashantkumar2907' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/prashant-kumar-ab124122a' },
  { label: 'Email', href: 'mailto:mishraprashant2002@gmail.com' },
];

const Footer = () => (
  <footer className="footer">
    <div className="page footer-inner">
      <p className="mono footer-copy">
        © {new Date().getFullYear()} Prashant Kumar · Bengaluru, India
      </p>
      <nav className="footer-links" aria-label="Elsewhere">
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;

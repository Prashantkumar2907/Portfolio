import React from 'react';
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Prashant Kumar. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Prashantkumar2907"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-kumar-ab124122a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>

        <Link
          to="introduction"
          smooth
          duration={600}
          className="footer-top"
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

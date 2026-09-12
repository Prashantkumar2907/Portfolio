import React, { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './BackToTop.css';

const VISIBLE_AFTER = 300;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setVisible(window.scrollY > VISIBLE_AFTER);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`back-to-top${visible ? ' back-to-top--visible' : ''}`}
      onClick={scrollTop}
      aria-label="Back to top"
      {...(visible ? {} : { inert: '' })}
    >
      <FiArrowUp />
    </button>
  );
};

export default BackToTop;

import React, { useEffect, useRef } from 'react';

// The bar used to be React state updated on every scroll event, animating `width`.
// That re-rendered the component on every pixel and made the browser re-layout the bar each
// time. Writing transform on the node directly inside rAF keeps it on the compositor and
// out of React's render path entirely.
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const paint = () => {
      frame = 0;
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      const ratio = total > 0 ? el.scrollTop / total : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(90deg, var(--primary), #6366f1)',
        zIndex: 9999,
        transform: 'scaleX(0)',
        transformOrigin: 'left center',
        willChange: 'transform',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;

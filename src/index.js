import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Favicons are pre-generated PNG/JPEG files in /public and declared in index.html.
// They were previously generated at runtime from the full-size profile photo, which
// downloaded 2.2MB and ran four blocking toDataURL() calls before first paint.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

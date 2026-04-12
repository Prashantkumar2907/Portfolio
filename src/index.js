import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Use the profile image as favicon at runtime so the built app uses your photo.
import profileImage from './component/mainpages/assets/image.jpg';

function setFavicon(href) {
  try {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = href;
  } catch (e) {
    // ignore in non-browser environments
  }
}

setFavicon(profileImage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



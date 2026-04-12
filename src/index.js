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

// Generate multiple sized PNG icons from the profile image at runtime and inject them as link tags.
async function generateIconsFromImage(src) {
  if (typeof window === 'undefined' || !window.document) return;
  const sizes = [16, 32, 192, 512];
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
    });

    sizes.forEach((s) => {
      const canvas = document.createElement('canvas');
      canvas.width = s;
      canvas.height = s;
      const ctx = canvas.getContext('2d');
      // fill transparent background
      ctx.clearRect(0, 0, s, s);
      // draw image centered and cover-cropped
      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;
      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, s, s);
      const dataUrl = canvas.toDataURL('image/png');

      // create or replace link tag for this size
      let link = document.querySelector(`link[rel='icon'][sizes='${s}x${s}']`);
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.sizes = `${s}x${s}`;
        document.getElementsByTagName('head')[0].appendChild(link);
      }
      link.href = dataUrl;
    });

    // Also set the standard favicon (no sizes)
    setFavicon(sizes.includes(32) ? document.querySelector("link[rel='icon'][sizes='32x32']").href : src);
  } catch (e) {
    // fallback to direct image if anything fails
    setFavicon(src);
  }
}

generateIconsFromImage(profileImage);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



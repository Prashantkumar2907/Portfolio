import React, { useEffect, useRef } from 'react';
import Introimage from '../assets/image.jpg'; // Corrected the import

const Introduction = () => {

  return (
    <div className='intro'>
      <div className="summary">
        <h1 className='summary-title'>Professional Summary</h1>
        <div className='summary-detail' >
        Motivated and detail-oriented Computer Science and Engineering student with hands-on experience in web development
and a strong foundation in software engineering principles. Adept at using the MERN stack to build scalable web
applications and passionate about continuous learning and problem-solving.
        </div>
      </div>
      <div className="front-image">
        <img src={Introimage} alt="Introduction" />
      </div>
    </div>
  );
}

export default Introduction;

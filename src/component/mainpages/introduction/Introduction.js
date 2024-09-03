import React, { useEffect, useRef } from 'react';
import Introimage from '../assets/image.jpg'; // Corrected the import

const Introduction = () => {

  return (
    <div className='intro'>
      <div className="summary">
        <h1 className='summary-title'>Professional Summary</h1>
        <div className='summary-detail' >
          I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
          My expertise includes building responsive web applications using modern JavaScript frameworks like React, 
          along with server-side technologies such as Node.js and Express. I have a deep understanding of database 
          management using both SQL and NoSQL solutions. My goal is to create efficient, scalable, and user-friendly 
          applications that solve real-world problems. I am always eager to learn new skills and stay updated with 
          the latest industry trends.
        </div>
      </div>
      <div className="front-image">
        <img src={Introimage} alt="Introduction" />
      </div>
    </div>
  );
}

export default Introduction;

import React from 'react';
import Introimage from '../assets/image.jpg'; 
const Introduction = () => {

  return (
<div class=" min-vh-100 d-flex flex-column "  >
  <div class="row g-0 flex-grow-1 ">
    <div class="col-md-6 p-3 d-flex justify-content-center align-items-center  ">
      <img src={Introimage} class="img-fluid rounded-5" alt="..."/>
    </div>
    <div class="col-md-6 d-flex align-items-center  ">
      <div class="card-body d-grid align-items-center ">
        <div class="card-title text-uppercase fs-3 fw-bolder font-monospace  ">Professional Summary</div>
        <div class="card-text text-center fs-5 lh-big font-monospace  "> 
          Motivated and detail-oriented Computer Science and Engineering student with hands-on experience in web development
              and a strong foundation in software engineering principles. Adept at using the MERN stack to build scalable and responsive web
               applications and passionate about continuous learning and problem-solving.
        </div>     
      </div>
    </div>
  </div>
</div>
  );
}
export default Introduction;

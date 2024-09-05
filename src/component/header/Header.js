import React from 'react'
import { Link } from 'react-router-dom'
// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { RiTwitterXLine } from "react-icons/ri";

const Header = () => {
  return (
    <nav   class="navbar navbar-expand-lg bg-body-secondary position-sticky top-0 " >
      <div  class="container-fluid ">

          <div className="name-logo w-2" >
             <a class="navbar-brand   " className='name-title' href="#">
               <Link to="/">Pr</Link>
             </a>
          </div>

         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>

        <div class="collapse navbar-collapse" className='nav' id="navbarNavDropdown">
          <ul class="navbar-nav">
           <li class="nav-item" >
             <Link class="nav-link active" aria-current="page" to="/about">About</Link>
           </li>
           <li class="nav-item" className='nav-item'>
             <Link class="nav-link" to="/skills">Skills</Link>
           </li>
           <li class="nav-item">
             <Link class="nav-link" to="/projects">Projects</Link>
           </li>
      
         {/* <li class=" dropdown"  >
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social Link
          </a>
          <ul class="dropdown-menu" >
            <li><Link class="dropdown-item" to="#"><FaInstagram /></Link></li>
            <li><Link class="dropdown-item" to="#"><FaGithub /></Link></li>
            <li><Link class="dropdown-item" to="#"><RiTwitterXLine /></Link></li>
          </ul>
       </li> */}
       </ul>
     </div>
     </div>
   </nav>

  )
}

export default Header

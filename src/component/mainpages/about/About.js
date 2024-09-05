import React from 'react'
import Aboutimage from '../assets/428713651_232252546640912_7534455580832694554_n.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className='about-container'>
        <div className="image-container">
        <div className="about-image">         
          <img src={Aboutimage} alt='Profile Picture' className='image' />
        </div>
        </div> 
        <div className="education-container">
             <h5>Education</h5>
             <div className="education-details">
              <div className="college-education">
                <p id='first'>Acharya Institute of Technology-(B.E)</p>
                <p id='second'>Dec. 2021 – Present</p>
                <p id='first'>Computer Science and Engineering </p>
                <p id='second'>CGPA 8.4</p>
                {/* <p id='second'>Bangalore, Karnataka</p> */}
              </div>
              <div className="secondary-education">
                 <p id='first'>Higher Secondary Education </p>
                 <p id='second'>2018 – 2020</p>
                 <p id='first'>Class XII PCM </p>
                 <p id='second'>Aggregate:84%</p>
                 {/* <p id='second'>Ranchi, Jharkhand</p> */}
              </div>
             </div>
        </div>
        <div className="media-container">
            <div className="linkedin">
              <Link to="#"><CiLinkedin size={50} /></Link>
            </div>
            <div className="instagram" >
              <Link  to="#"><FaInstagram  size={50}/></Link>
            </div>
            <div className="github">
            <Link  to="#"><FaGithub size={50}/></Link>
            </div>
            <div className="twitter">
              <Link  to="#"><RiTwitterXLine size={50}/></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

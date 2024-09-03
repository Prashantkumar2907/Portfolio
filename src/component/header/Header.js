import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
    <div className="name-logo">
       <h1 className='name-title'> <Link to="/">Pr</Link> </h1>
    </div>
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/skills">Skills</Link></li>
            <li className="nav-item"><Link to="/projects">Projects</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
    <ul className='media' >
            <li className='media-item'><FaInstagram /></li>
            <li className='media-item'><FaGithub /></li>
            <li className='media-item'><RiTwitterXLine /></li>
    </ul>
    </header>

  )
}

export default Header

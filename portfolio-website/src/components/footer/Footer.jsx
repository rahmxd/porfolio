import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>AHMXD</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/rafee-ahmed/" target='_blank'><AiOutlineLinkedin/></a>
        <a href="https://www.instagram.com/ahmxd94/?hl=en" target='_blank'><AiOutlineInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; AHMXD. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
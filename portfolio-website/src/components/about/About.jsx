import React from 'react'
import './about.css'
import aboutMe from '../../assets/aboutMe.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Full stack experience</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5 completed</small>
            </article>
          </div>

          <p>
          I’m currently based in Brighton and I love solving complex problems. 
          I have experience as a full stack mern developer. 
          I prefer working with all areas of my current stack and I enjoy developing user-friendly and efficient applications.
          My passion for software development started when I started developing a trading bot during my graduation year at Sussex Uni 
          using NodeJs and IG Trading API to get currency data so I could predict when to enter long or short positions in the forex market.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
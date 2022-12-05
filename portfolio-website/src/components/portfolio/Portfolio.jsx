import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/img1.jpeg'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/img3.jpeg'
import Img4 from '../../assets/img1.jpeg'

const portfolioData = [
  {
    id: 1,
    image: Img1,
    title: 'Industry Partner Portal: Hiring',
    github: 'https://github.com/Team-Engineering-Project',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: Img2,
    title: 'Teaching Blog',
    github: 'https://github.com/rahmxd/teaching-mastery-blogs',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: Img3,
    title: 'Maths Revision Website: A1 Maths',
    github: 'https://github.com/orgs/A1Maths/repositories',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: Img4,
    title: 'Chitter (Twitter Clone)',
    github: 'https://github.com/rahmxd/chitter-challenge',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map((project) => {
            return (
              <article key={project.id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={project.image} alt={project.title} />
                </div>
                <h3>{project.title}</h3>
                <div className="portfolio__item-cta">
                  <a href={project.github} className='btn' target='_blank'>Github</a>
                  <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>  
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
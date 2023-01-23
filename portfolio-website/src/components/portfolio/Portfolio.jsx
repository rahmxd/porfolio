import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/ViewProfile.png'
import Img2 from '../../assets/img2.png'
import Img3 from '../../assets/A1Maths.png'
import Img4 from '../../assets/noImage.png'
import Img5 from '../../assets/img5.png'
import NoImage from '../../assets/noImage.png'

const portfolioData = [
  {
    id: 1,
    image: Img3,
    title: 'Maths Revision Website: A1 Maths',
    github: 'https://github.com/orgs/A1Maths/repositories',
    demo: 'https://a1maths.co.uk/'
  },
  {
    id: 2,
    image: Img5,
    title: 'Relevant Gaming Organisation',
    github: 'https://github.com/rahmxd/Relevant-Gaming-Website',
    demo: 'https://relevantgaming.co.uk/'
  },
  {
    id: 3,
    image: Img1,
    title: 'Industry Partner Portal: Hiring',
    github: 'https://github.com/Team-Engineering-Project',
    demo: 'https://www.dfxtra.co.uk'
  },
  {
    id: 4,
    image: Img4,
    title: 'Teaching Blog',
    github: 'https://github.com/rahmxd/teaching-mastery-blogs',
    demo: ''
  },
  {
    id: 5,
    image: Img4,
    title: 'Industry Partner: Graduate Profile',
    github: 'https://github.com/mse4-dfx3',
    demo: ''
  },
  {
    id: 6,
    image: Img4,
    title: 'Chitter (Twitter Clone)',
    github: 'https://github.com/rahmxd/chitter-challenge',
    demo: ''
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
                  {
                    project.demo? <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    : ""
                  }
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
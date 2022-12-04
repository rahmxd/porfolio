import React from 'react'
import './testimonials.css'
import Russell from '../../assets/RussellChoudhury.jpeg'
import Waqas from '../../assets/WaqasParvaiz.jpeg'
import Alistair from '../../assets/AlistairGibbs.jpeg'

const TestimonialData = [
  {
    id: 1,
    displayProfile: Russell,
    name: 'Russel Choudhury',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perferendis tempore? Nisi dolorum pariatur eius atque, veniam velit iure omnis harum. Magnam tempora, asperiores vero laudantium eaque adipisci modi quas.'
  },
  {
    id: 2,
    displayProfile: Alistair,
    name: 'Alistair Gibbs',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perferendis tempore? Nisi dolorum pariatur eius atque, veniam velit iure omnis harum. Magnam tempora, asperiores vero laudantium eaque adipisci modi quas.'
  },
  {
    id: 3,
    displayProfile: Waqas,
    name: 'Waqas Parvaiz',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, perferendis tempore? Nisi dolorum pariatur eius atque, veniam velit iure omnis harum. Magnam tempora, asperiores vero laudantium eaque adipisci modi quas.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from Clients + Colleagues</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {
          TestimonialData.map((reference)=>{
            return (
              <article key={reference.id} className='testimonial'>
                <div className="reference_avatar">
                  <img src={reference.displayProfile} alt="First Testimonial" />
                </div>
                <h5 className='reference_name'>{reference.name}</h5>
                  <small className='reference_review'>
                    {reference.review}
                  </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
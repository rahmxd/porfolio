import React from 'react'
import './testimonials.css'
import Russell from '../../assets/RussellChoudhury.jpeg'
import Waqas from '../../assets/WaqasParvaiz.jpeg'
import Alistair from '../../assets/AlistairGibbs.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
      {/* style={{height: "300px", blockSize: "fit-content"}} */}
      <Swiper className='container testimonials__container'
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          TestimonialData.map((reference)=>{
            return (
              <SwiperSlide>
                <article key={reference.id} className='testimonial'>
                  <div className="reference_avatar">
                    <img src={reference.displayProfile} alt="Display profile" />
                  </div>
                  <h5 className='reference_name'>{reference.name}</h5>
                  <small className='reference_review'>{reference.review}</small>
                </article>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
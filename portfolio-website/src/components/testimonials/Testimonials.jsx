import React from 'react'
import './testimonials.css'
import Russell from '../../assets/RussellChoudhury.jpeg'
import Waqas from '../../assets/WaqasParvaiz.jpeg'
import Alistair from '../../assets/AlistairGibbs.jpeg'
import Roxana from '../../assets/Roxana-anamaria-turc.jpeg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const TestimonialData = [
  {
    id: 1,
    displayProfile: Roxana,
    name:'Roxana Anamaria Turc',
    review: 'I worked with Rafee on the frontend development of our Industry Partner: Hiring project. Rafee always kept the pair and swarm programming sessions focused on the trello tasks for our sprint. His knowledge of fullstack mern development helped me better understand how the front and backend interact.'
  },
  {
    id: 2,
    displayProfile: Russell,
    name: 'Russel Choudhury',
    review: 'Rafee, is an exceptional programmer and a valuable asset to any team. I have had the pleasure of working with him on several coding challenges and pair programming sessions, and he consistently demonstrates a strong understanding of programming concepts and best practices. His ability to think logically and solve problems efficiently is impressive, and his attention to detail ensures that the code he writes is of the highest quality. In addition to his technical skills, Rafee is a great to work with. He is collaborative, communicative, and always willing to help his teammates. I highly recommend Rafee as a programmer and I am confident he will perform exceptionally in your team.'
  },
  {
    id: 3,
    displayProfile: Alistair,
    name: 'Alistair Gibbs',
    review: 'In our team engineering project, Rafee was a great psuedo Scrum Master. His knowledge of backend developement using NodeJs and ExpressJs was really insightful. Rafee is quick to spot bugs/techincal issues and always makes an effort to ensure the team is shared with that knowledge and how to overcome them in the future.'
  },
  {
    id: 4,
    displayProfile: Waqas,
    name: 'Waqas Parvaiz',
    review: 'Rafee is exceptionally skilled at programming and has a friendly personality which makes it great to collaborate with him. I find it useful to discuss and share ideas with Rafee when working on a project and always learn something new in the process.'
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
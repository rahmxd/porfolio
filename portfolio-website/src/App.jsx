import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonial'


const App = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
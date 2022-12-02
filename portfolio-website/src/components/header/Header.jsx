import React from 'react'
import './header.css'
import Cta from './Cta'
// import profilePic from '../../assets/profilepic.jpeg'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammed Ahmed</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Cta/>
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header
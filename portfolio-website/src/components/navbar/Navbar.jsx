import React from 'react'
import './navbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <a href="#" className='active'><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><MdWorkOutline/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar
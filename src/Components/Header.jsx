import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <div className="name_background">
        <span className='L1'><h1>J</h1></span>
        <span className='L2'><h1>E</h1></span>
        <span className='L3'><h1>S</h1></span>
        <span className='L4'><h1>U</h1></span>
        <span style={{ marginRight: '10px' }} className='L5'><h1>S</h1></span>
        <span className='L6'><h1>V</h1></span>
        <span className='L7'><h1>E</h1></span>
        <span className='L8'><h1>R</h1></span>
        <span className='L9'><h1>G</h1></span>
        <span className='L10'><h1>A</h1></span>
        <span className='L11'><h1>R</h1></span>
        <span className='L12'><h1>A</h1></span>
      </div>
      <div className="menu">
        <button><Link to='/'>HOME</Link></button>
        <button><Link to='/ENGINEERING'>ENGINEERING</Link></button>
        <button><Link to='/TRAVEL'>TRAVEL</Link></button>
        <button><Link to='/EXPERIENCE'>EXPERIENCE</Link></button>
        <button><Link to='/LITERATURE'>LITERATURE</Link></button>
      </div>
    </header>
  )
}

export default Header
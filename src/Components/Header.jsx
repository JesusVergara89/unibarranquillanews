import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='Header'>
      <div className="name_background">
        <span className='L1'><h1>U</h1></span>
        <span className='L2'><h1>N</h1></span>
        <span className='L3'><h1>I</h1></span>
        <span className='L4'><h1>B</h1></span>
        <span className='L5'><h1>A</h1></span>
        <span className='L6'><h1>R</h1></span>
        <span className='L7'><h1>R</h1></span>
        <span className='L8'><h1>A</h1></span>
        <span className='L9'><h1>N</h1></span>
        <span className='L10'><h1>Q</h1></span>
        <span className='L11'><h1>U</h1></span>
        <span className='L12'><h1>I</h1></span>        
        <span className='L13'><h1>L</h1></span>
        <span className='L14'><h1>L</h1></span>        
        <span className='L15'><h1>A</h1></span>
      </div>
      <div className="menu">
        <button><Link to='/'>HOME</Link></button>
        <button><Link to='/ENGINEERING'>ENGINEERING</Link></button>
        <button><Link to='/TRAVEL'>TRAVEL</Link></button>
        <button><Link to='/EXPERIENCE'>EXPERIENCE</Link></button>
        <button><Link to='/LITERATURE'>LITERATURE</Link></button>
        <button><Link to='/ASUNTOS'>ASUNTOS</Link></button>
        <button><Link to='/VIDA'>VIDA</Link></button>
        <button><Link to='/EVENTO'>EVENTO</Link></button>
        <button><Link to='/ENTREVISTA'>ENTREVISTA</Link></button>
      </div>
    </header>
  )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

/**
 * Header component represents the top navigation bar of the website.
 * It contains the logo and menu items for different sections of the website.
 * @returns {JSX.Element} Header component
 */
const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  };
  return (
    <header className='Header'>
      {/* Logo section */}
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
      {/* Menu section */}
      <div className="menu">
        {/* Navigation buttons */}
        <button onClick={scrollToTop} ><Link to='/'>HOME</Link></button>
        <button><Link to='/ACTUALIDAD'>ENGINEERING</Link></button>
        <button><Link to='/CULTURA'>TRAVEL</Link></button>
        <button><Link to='/INVESTIGACION'>EXPERIENCE</Link></button>
        <button><Link to='/DEPORTES'>LITERATURE</Link></button>
        <button><Link to='/ASUNTOS'>ASUNTOS</Link></button>
        <button><Link to='/VIDAU'>VIDA</Link></button>
        <button><Link to='/EVENTOS'>EVENTO</Link></button>
        <button><Link to='/ENTREVISTA'>ENTREVISTA</Link></button>
        <button><Link to='/OPENPOSSITIONS'>WORKS</Link></button>
        <button><Link to='/TECNOLOGIA'>TECNOLOGIA</Link></button>    
      </div> 
    </header>
  );
}

export default Header;

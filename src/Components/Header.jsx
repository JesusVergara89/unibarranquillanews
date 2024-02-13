import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
<<<<<<< HEAD
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
        <button><Link to='/ACTUALIDAD'>ACTUALIDAD</Link></button>
        <button><Link to='/CULTURA'>CULTURA</Link></button>
        <button><Link to='/INVESTIGACION'>INVESTIGACION</Link></button>
        <button><Link to='/DEPORTES'>DEPORTES</Link></button>
        <button><Link to='/ASUNTOS'>ASUNTOS</Link></button>
        <button><Link to='/VIDAU'>VIDA</Link></button>
        <button><Link to='/EVENTOS'>EVENTO</Link></button>
        <button><Link to='/ENTREVISTA'>ENTREVISTA</Link></button>
        <button><Link to='/OPENPOSSITIONS'>WORKS</Link></button>
        <button><Link to='/TECNOLOGIA'>TECNOLOGIA</Link></button> 
        <button><Link to='/LOGIN'>LOGIN</Link></button>
        <button><Link to='/COLLABORATORS'>COLLABORATORS</Link></button>        
      </div> 
    </header>
  );
=======
    const [Menu, setMenu] = useState(false)
    const menuLoad = () => { setMenu(!Menu) }
    return (
        <>
            <header className='Main_header'>
                <Link className='Logo' to='/'>
                    <h1>UNIBARRANQUILLA</h1>
                </Link>
                <button onClick={menuLoad} className={Menu ? 'Menu_active on' : 'Menu_active'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </header>
            <div className={Menu ? 'option on' : 'option off'}>
                <Link className='enlace' to='/ACTUALIDAD'>Actualidad </Link>
                <Link className='enlace' to='/ASUNTOS'> Mi vida universitaria, mi ciudad </Link>
                <Link className='enlace' to='/CULTURA'> Cultura y Arte</Link>
                <Link className='enlace' to='/VIDAU'> Vida Estudiantil</Link>
                <Link className='enlace' to='/DEPORTES'> Deportes</Link>
                <Link className='enlace' to='/EVENTOS'> Evento y Actividades</Link>
                <Link className='enlace' to='/INVESTIGACION'> Investigación y Desarrollo</Link>
                <Link className='enlace' to='/ENTREVISTA'> Entrevista y perfiles </Link>
                <Link className='enlace' to='/TECNOLOGIA'> Tecnología</Link>
            </div>
            <div onClick={menuLoad} className={Menu ? 'Close on' : 'Close off'} />
        </>
    )
>>>>>>> DeveloperCarr
}

export default Header
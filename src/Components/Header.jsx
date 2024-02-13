import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    const [Menu, setMenu] = useState(false)
    const closeMenu = () => {
        setMenu(false)
    }
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
                <Link onClick={closeMenu} className='enlace' to='/ACTUALIDAD'>Actualidad </Link>
                <Link onClick={closeMenu} className='enlace' to='/ASUNTOS'> Mi vida universitaria, mi ciudad </Link>
                <Link onClick={closeMenu} className='enlace' to='/CULTURA'> Cultura y Arte</Link>
                <Link onClick={closeMenu} className='enlace' to='/VIDAU'> Vida Estudiantil</Link>
                <Link onClick={closeMenu} className='enlace' to='/DEPORTES'> Deportes</Link>
                <Link onClick={closeMenu} className='enlace' to='/EVENTOS'> Evento y Actividades</Link>
                <Link onClick={closeMenu} className='enlace' to='/INVESTIGACION'> Investigación y Desarrollo</Link>
                <Link onClick={closeMenu} className='enlace' to='/ENTREVISTA'> Entrevista y perfiles </Link>
                <Link onClick={closeMenu} className='enlace' to='/TECNOLOGIA'> Tecnología</Link>
                <Link onClick={closeMenu} className='enlace' to='/LOGIN'> Login</Link>
            </div>
            <div onClick={menuLoad} className={Menu ? 'Close on' : 'Close off'} />
        </>
    )
}

export default Header
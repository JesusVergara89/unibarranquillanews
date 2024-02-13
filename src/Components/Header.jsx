import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
const Header = () => {
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
}

export default Header
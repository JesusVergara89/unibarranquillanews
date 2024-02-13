import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import icons from '../Images/periodico.png'
const Header = () => {
    const [Menu, setMenu] = useState(false)
    const menuLoad = () => { setMenu(!Menu) }
    return (
        <>
            <header className='Main_header'>
                <Link className='Logo' to='/'>
                    <img src={icons} alt="" />
                    <h1>UNIBARRANQUILLA</h1>
                </Link>
                <button onClick={menuLoad} className={Menu ? 'Menu_active on' : 'Menu_active'}>
                    {
                        Menu ? <i className='bx bx-x'></i> :
                            <i className='bx bx-menu'></i>
                    }
                </button>
            </header>
            <div className={Menu ? 'option on' : 'option off'}>
                <Link className='enlace' to='/ACTUALIDAD'><i className='bx bx-alarm-add'/>Actualidad </Link>
                <Link className='enlace' to='/OPENPOSSITIONS'><i className='bx bx-conversation'/> Mi vida universitaria, mi ciudad </Link>
                <Link className='enlace' to='/CULTURA'><i className='bx bx-palette'/> Cultura y Arte</Link>
                <Link className='enlace' to='/VIDAU'><i className='bx bx-user'/> Vida Estudiantil</Link>
                <Link className='enlace' to='/DEPORTES'><i className='bx bx-football'/> Deportes</Link>
                <Link className='enlace' to='/EVENTOS'><i className='bx bx-calendar-event'/> Evento y Actividades</Link>
                <Link className='enlace' to='/INVESTIGACION'><i className='bx bx-test-tube'/> Investigación y Desarrollo</Link>
                <Link className='enlace' to='/ENTREVISTA'><i className='bx bx-briefcase-alt-2'/> Entrevista y perfiles </Link>
                <Link className='enlace' to='/TECNOLOGIA'><i className='bx bx-rocket'/> Tecnología</Link>
            </div>
        </>
    )
}

export default Header
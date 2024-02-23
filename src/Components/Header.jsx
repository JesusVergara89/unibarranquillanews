import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
const Header = ({ reloadPage, setReloadPage }) => {
    const [Menu, setMenu] = useState(false)
    const closeMenu = () => {
        setMenu(false)
        setReloadPage(!reloadPage)
    }
    const arrayOfHeader = [
        {
            name: "ACTUALIDAD"
        },
        {
            name: "ASUNTOS"
        },
        {
            name: "CULTURA"
        },
        {
            name: "VIDAU"
        },
        {
            name: "DEPORTES"
        },
        {
            name: "EVENTOS"
        },
        {
            name: "INVESTIGACION"
        },
        {
            name: "ENTREVISTA"
        },
        {
            name: "TECNOLOGIA"
        },
        {
            name: "LOGIN"
        },
        {
            name: "BLOG"
        }
    ]
    const menuLoad = () => { setMenu(!Menu) }
    return (
        <>
            <header className='Main_header'>
                <Link onClick={closeMenu} className='Logo' to='/'>
                    <h1 onClick={closeMenu} >UNIBARRANQUILLA</h1>
                </Link>
                <button onClick={menuLoad} className={Menu ? 'Menu_active on' : 'Menu_active'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </header>
            <div className={Menu ? 'option on' : 'option off'}>
                {arrayOfHeader.map((unit, i) => (
                    <Link key={i} onClick={closeMenu} className='enlace' to={`/${unit.name}/pages/1`}>{unit.name}</Link>
                ))}
            </div>
            <div onClick={menuLoad} className={Menu ? 'Close on' : 'Close off'} />
        </>
    )
}

export default Header
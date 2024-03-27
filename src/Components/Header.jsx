import React, { useState } from 'react'
import '../Styles/header.css'
import { Link } from 'react-router-dom'
import useRouter from '../Hooks/useRouter'
const Header = ({ reloadPage, setReloadPage }) => {
    const [Menu, setMenu] = useState(false)
    const [DropDrown, setDropDrown] = useState(false)
    const { ArrayofRouter } = useRouter()
    const closeMenu = () => {
        setMenu(false)
        setReloadPage(!reloadPage)
        setDropDrown(false)
    }

    const ArrayOfAuxiliar = [
        { Url: "LOGIN" },
        { Url: "BLOG" }
    ]
    const ArrayofHeader = ArrayofRouter.concat(ArrayOfAuxiliar)
    const menuLoad = () => { setMenu(!Menu) }
    return (
        <>
            <header className='Main_header'>
                <button onClick={menuLoad} className={Menu ? 'Menu_active on' : 'Menu_active'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Link onClick={closeMenu} className='Logo' to='/'>
                    <h1 onClick={() => { closeMenu() }} >UNIBARRANQUILLA</h1>
                </Link>
            </header>
            <nav className={Menu ? 'option on' : 'option off'}>
                <div className='box_list'>
                    {ArrayofHeader?.map((unit, i) => (
                        <article key={i} className='enlace_main'>
                            <div>
                                <Link onClick={closeMenu} className='enlace' to={`/${unit.Url}`}>{unit.Url}</Link>
                                {unit.Subseccion && <i className={DropDrown ? 'bx bx-chevron-down on' : 'bx bx-chevron-down'} onClick={() => setDropDrown(!DropDrown)}></i>}
                            </div>
                            {unit.Subseccion ?
                                <section className={DropDrown ? 'Conten_subseccion on' : 'Conten_subseccion off'}>
                                    {unit.Subseccion.map((data, index) => (
                                        <Link key={index} onClick={closeMenu} className='enlace' to={`/${unit.Url}/${data.Url}`}>{data.Url}</Link>
                                    ))}
                                </section>
                                : ''}
                        </article>
                    ))}
                </div>
            </nav>
            <div onClick={menuLoad} className={Menu ? 'Close on' : 'Close off'} />
        </>
    )
}

export default Header
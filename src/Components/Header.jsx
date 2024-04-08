import React, { useContext, useState } from 'react'
import '../Styles/header.css'
import { Link, useNavigate } from 'react-router-dom'
import useRouter from '../Hooks/useRouter'
import { Acesscontext } from './Context/Acesscontext'
import { signOut } from 'firebase/auth'
import { auth2 } from '../firebaseconfig'
import { toast } from 'react-toastify'
import Setting from './Setting'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
// million-ignore
const Header = () => {
    const [Menu, setMenu] = useState(false)
    const [statesetting, setstatesetting] = useState(false)
    const [DropDrown, setDropDrown] = useState(false)
    const { ArrayofRouter } = useRouter()
    const { IsLogged, AccessInfor, Admin, Check } = useContext(Acesscontext)
    const navigate = useNavigate()

    const closeMenu = () => {
        setMenu(false)
        setDropDrown(false)
    }

    const ArrayOfAuxiliar = [
        { Url: "LOGIN" },
        { Url: "BLOG" }
    ]
    const Navegation = (e) => {
        navigate(`/${e}`)
        closeMenu()
    }
    const ArrayofHeader = ArrayofRouter.concat(ArrayOfAuxiliar)
    const menuLoad = () => { setMenu(!Menu) }
    const closeSesion = () => {
        closeMenu()
        signOut(auth2)
            .then(() => {
                toast('Sesión cerrada con éxito', { type: 'success' })
                window.localStorage.clear()
                navigate('/')
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <header className='Main_header'>
                <button onClick={menuLoad} className={Menu ? 'Menu_active on' : 'Menu_active'}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Link onClick={closeMenu} className='Logo' to='/'>
                    <h1 onClick={closeMenu} >UNIBARRANQUILLA</h1>
                </Link>
            </header>
            <nav className={Menu ? 'option on' : 'option off'}>
                {IsLogged &&
                    <div className='toolsUser'>
                        <i onClick={() => Navegation('CREATE')} className='bx bx-book-add'></i>
                        {Admin && <i onClick={() => Navegation('REGISTER')} className='bx bx-user-plus'></i>}
                        <i onClick={() => { setstatesetting(true), closeMenu() }} className='bx bx-cog'></i>
                        <i onClick={closeSesion} className='bx bx-log-out'></i>
                    </div>
                }
                <div className={IsLogged ? 'box_list on' : 'box_list'}>
                    {ArrayofHeader.map((unit, i) => (
                        unit.Url === 'LOGIN' && IsLogged ? '' :
                            < article key={i} className='enlace_main' >
                                <div>
                                    <Link onClick={closeMenu} className='enlace' to={`/${unit.Url}`}>{unit.Url.toLowerCase()}</Link>
                                    {unit.Subseccion && <i className={DropDrown ? 'bx bx-chevron-down on' : 'bx bx-chevron-down'} onClick={() => setDropDrown(!DropDrown)}></i>
                                    }
                                </div>
                                {
                                    unit.Subseccion ?
                                        <section className={DropDrown ? 'Conten_subseccion' : 'Conten_subseccion off'}>
                                            {unit.Subseccion.map((data, index) => (
                                                <Link key={index} onClick={closeMenu} className='enlace' to={`/${unit.Url}/${data.Url}`}>{data.Url.toLowerCase()}</Link>
                                            ))}
                                        </section>
                                        : ''
                                }
                            </article>
                    ))}
                </div>
            </nav >
            {Check ?
                <article className='Perfil'>
                    <p className='Name'><Skeleton width={120} height={24}/></p>
                    <Skeleton circle width={35} height={35}/>
                </article>
                : IsLogged &&
                <article className='Perfil'>
                    <p>{AccessInfor.Name}</p>
                    <img src={AccessInfor.PhotoUrl} alt="" />
                </article>
            }
            <div onClick={menuLoad} className={Menu ? 'Close on' : 'Close off'} />
            {IsLogged &&
                <Setting setstatesetting={setstatesetting} statesetting={statesetting} />
            }
        </>
    )
}

export default Header
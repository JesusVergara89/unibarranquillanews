import React, { useState } from 'react'
import useSeccion from '../Hooks/useSeccion'
import Loading from './Loading'
import '../Styles/seccionId.css'
import moment from 'moment/moment'
import NotFound from './NotFound'

const SeccionId = () => {
    const { update, status } = useSeccion()
    const [Menucom, setMenucom] = useState(false)
    return (
        <>
            {
                status === 'failed' ? <NotFound /> : update ? (
                    <section className='Main-Seccion-id'>
                        <article className='Main-id'>
                            <div className='Cuerpo'>
                                <h2 className="Title-id">{update[0].Title}</h2>
                                <img className='img-id' src={update[0].Pic} alt="" />
                                <h3 className="Informacion">{moment(update[0].Date).format("MMM D YYYY")} <br /> {`Por: ${update[0].Editor}`}</h3>
                                <div className="body-id">
                                    {update[0].Body.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            </div>
                            <div onClick={() => setMenucom(true)} className='Compartir'>
                                <button>
                                    <i className='bx bx-share'></i>
                                    <p>Compartir</p>
                                </button>
                            </div>
                        </article>
                        <article className={Menucom ? 'Menu-compartir on' : 'Menu-compartir off'}>
                            <header className='Compartir-header'>
                                <h2>Compartir</h2>
                                <i onClick={() => setMenucom(false)} className='bx bx-x'></i>
                            </header>
                            <section className='Boxicon-carusel'>
                                < i className='bx bxl-facebook' />
                                <p>Publicación</p>
                            </section>
                        </article>
                        <article onClick={() => setMenucom(false)} className={Menucom ? 'Close-Menu on' : 'Close-Menu off'} />
                    </section>
                ) : <Loading />
            }
        </>
    )
}

export default SeccionId
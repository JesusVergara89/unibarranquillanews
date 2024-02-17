import React, { useState } from 'react'
import useSeccion from '../Hooks/useSeccion'
import Loading from './Loading'
import '../Styles/seccionId.css'
import moment from 'moment/moment'

const SeccionId = () => {
    let update = useSeccion()
    const [Menucom, setMenucom] = useState(false)
    return (
        <section className='Main-Seccion-id'>
            {
                update ? (
                    <>
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
                            <div onClick={() => setMenucom(!Menucom)} className='Compartir'>
                                <button>
                                    <i className='bx bx-share'></i>
                                    <p>Compartir</p>
                                </button>
                            </div>
                        </article>
                        <div className={Menucom ? 'Menu-compartir on' : 'Menu-compartir off'}>
                            < i className='bx bxl-facebook-circle' />Publicaciones
                            <i className='bx bxl-facebook-circle' />Chat
                        </div>
                    </>
                ) : <Loading />
            }
        </section>
    )
}

export default SeccionId
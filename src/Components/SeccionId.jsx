import React, { useState } from 'react'
import useSeccion from '../Hooks/useSeccion'
import Loading from './Loading'
import '../Styles/seccionId.css'
import moment from 'moment/moment'
import NotFound from './NotFound'
import { FacebookShareButton } from "react-share";
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
const SeccionId = () => {
    const { update, status } = useSeccion()
    let { Seccion, Id } = useParams()
    const [Menucom, setMenucom] = useState(false)

    return (
        <>
            {
                status === 'failed' ? <NotFound /> : update ? (
                    <section className='Main-Seccion-id'>
                        <Helmet>
                            <title>{update[0].Title.slice(0, 35) + "..."}</title>
                            <meta name="description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="og:title" content={update[0].Title.slice(0, 35)+"..."} />
                            <meta property="og:description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="og:site_name" content="Unibarranquilla Newspaper" />
                            <meta property="og:image" content={update[0].Pic} />
                            <meta property="og:image:url" content={update[0].Pic} />
                            <meta property="og:imagen:width" content="200" />
                            <meta property="og:imagen:height" content="200" />
                            <meta property="og:type" content="article" />
                            <meta property="og:url" content={`https://unibarranquilla-newspaper.netlify.app/${Seccion}/${Id}`} />
                            <meta property="twitter:card" content="summary_large_image" />
                            <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
                            <meta property="twitter:title" content={update[0].Title.slice(0, 35)+"..."} />
                            <meta property="twitter:description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="twitter:image" content={update[0].Pic} />
                        </Helmet>
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
                                <FacebookShareButton url={"hola-mundo"} quote={"hola me llaam"}>
                                    < i className='bx bxl-facebook' />
                                    <p>Publicación</p>
                                </FacebookShareButton>
                            </section>
                        </article>
                        <article onClick={() => setMenucom(false)} className={Menucom ? 'Close-Menu on' : 'Close-Menu off'} />
                    </section>

                ) : <Helmet>
                    <title>Cargando...</title>
                    < Loading />
                </Helmet>
            }
        </>
    )
}

export default SeccionId
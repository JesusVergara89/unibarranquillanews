import React, { useState } from 'react'
import useSeccion from '../Hooks/useSeccion'
import Loading from './Loading'
import '../Styles/seccionId.css'
import moment from 'moment/moment'
import NotFound from './NotFound'
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import Carrusel from './Carrusel'
import { SwiperSlide } from "swiper/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Bounce, toast } from 'react-toastify';
const SeccionId = () => {
    const notify = () => {
        toast.success("Link copiado con éxito", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    const FromUpperToLowerCase = (texto) => {
        let oraciones = texto.split('. ');
        oraciones = oraciones.map((oracion) => {
            return oracion.charAt(0).toUpperCase() + oracion.slice(1).toLowerCase();
        });
        return oraciones.join('. ');
    };
    const { update, status } = useSeccion()
    let { Seccion, Id } = useParams()
    const [Menucom, setMenucom] = useState(false)
    let currentpageUrl = `https://unibarranquilla-newspaper.netlify.app/${Seccion}/${Id}`;
    let breakpoints = {
        470: {
            slidesPerView: 3,
            pagination: {
                clickable: true
            }
        },
        200: {
            slidesPerView: 2,
            pagination: {
                clickable: true
            }
        },
    }
    return (
        <>
            {
                status === 'failed' ? <NotFound /> : update ? (
                    <section className='Main-Seccion-id'>
                        <Helmet>
                            <title>{update[0].Title.slice(0, 35) + "..."}</title>
                            <meta name="description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="og:title" content={update[0].Title.slice(0, 35) + "..."} />
                            <meta property="og:description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="og:site_name" content="Unibarranquilla Newspaper" />
                            <meta property="og:image" content={update[0].Pic} />
                            <meta property="og:image:url" content={update[0].Pic} />
                            <meta property="og:imagen:width" content="200" />
                            <meta property="og:imagen:height" content="200" />
                            <meta property="og:type" content="article" />
                            <meta property="og:url" content={currentpageUrl} />
                            <meta property="twitter:card" content="summary_large_image" />
                            <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
                            <meta property="twitter:title" content={update[0].Title.slice(0, 35) + "..."} />
                            <meta property="twitter:description" content={update[0].Body.slice(0, 50) + "..."} />
                            <meta property="twitter:image" content={update[0].Pic} />
                        </Helmet>
                        <article className='Main-id'>
                            <div className='Cuerpo'>
                                <h2 className="Title-id">{FromUpperToLowerCase(update[0].Title)}</h2>
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
                            <div className='Container-compartir'>
                                <header className='Compartir-header'>
                                    <h2>Compartir</h2>
                                    <i onClick={() => setMenucom(false)} className='bx bx-x'></i>
                                </header>
                                <section className='Boxicon-carusel'>
                                    <Carrusel breakpoints={breakpoints}>
                                        <SwiperSlide>
                                            <FacebookShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                < i className='bx bxl-facebook' />
                                                <p>Facebook</p>
                                            </FacebookShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <InstapaperShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                <i className='bx bxl-instagram' />
                                                <p>Instagram</p>
                                            </InstapaperShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <LinkedinShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                <i class='bx bxl-linkedin' />
                                                <p>Linkedin</p>
                                            </LinkedinShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TelegramShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                <i class='bx bxl-telegram' />
                                                <p>Telegram</p>
                                            </TelegramShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <WhatsappShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                <i class='bx bxl-whatsapp' />
                                                <p>WhatsApp</p>
                                            </WhatsappShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <TwitterShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" stroke="black" viewBox="0 0 50 50">
                                                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                                </svg>
                                                <p>X-twitter</p>
                                            </TwitterShareButton>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <CopyToClipboard text={currentpageUrl}>
                                                <div onClick={notify} className='Boxicon'>
                                                    <i className='bx bx-copy' />
                                                    <p>Copiar link</p>
                                                </div>
                                            </CopyToClipboard>
                                        </SwiperSlide>
                                    </Carrusel>
                                </section>
                            </div>
                        </article >
                        <article onClick={() => setMenucom(false)} className={Menucom ? 'Close-Menu on' : 'Close-Menu off'} />
                    </section >
                ) :
                    <>
                        <Helmet>
                            <title>Cargando...</title>
                        </Helmet>
                        <Loading />
                    </>
            }
        </>
    )
}

export default SeccionId
import React, { useState } from 'react'
import { FacebookShareButton, LinkedinShareButton, TelegramShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import { useParams } from 'react-router-dom'
import Carrusel from '../Carrusel'
import { SwiperSlide } from "swiper/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Bounce, toast } from 'react-toastify';
import './compartir.css'

const Compartir = ({ Link }) => {
    let { name, id } = useParams()
    const [Menucom, setMenucom] = useState(false)
    let currentpageUrl = `https://unibarranquilla-newspaper.netlify.app/#/${name}/${id}`;
    const notify = () => {
        setMenucom(false)
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
    let breakpoints = {
        900: {
            slidesPerView: 3,
            pagination: {
                clickable: true
            }
        },
        470: {
            slidesPerView: 3,
            pagination: {
                clickable: false
            }
        },
        200: {
            slidesPerView: 2,
            speed: 280,
            pagination: {
                clickable: false
            }
        },
    }
    return (
        <>
            <div onClick={() => setMenucom(true)} className='Compartir'>
                <button>
                    <i className='bx bx-share'></i>
                    <p>Compartir</p>
                </button>
            </div>
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
                                    < i onClick={() => setMenucom(false)} className='bx bxl-facebook' />
                                </FacebookShareButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <LinkedinShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                    <i onClick={() => setMenucom(false)} className='bx bxl-linkedin' />
                                </LinkedinShareButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TelegramShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                    <i onClick={() => setMenucom(false)} className='bx bxl-telegram' />
                                </TelegramShareButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <WhatsappShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                    <i onClick={() => setMenucom(false)} className='bx bxl-whatsapp' />
                                </WhatsappShareButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TwitterShareButton className='Boxicon' url={currentpageUrl} hashtag='#Unibarranquilla'>
                                    <svg onClick={() => setMenucom(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" stroke="black" viewBox="0 0 50 50">
                                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                                    </svg>

                                </TwitterShareButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CopyToClipboard text={currentpageUrl}>
                                    <div onClick={notify} className='Boxicon'>
                                        <i className='bx bx-copy' />
                                    </div>
                                </CopyToClipboard>
                            </SwiperSlide>
                        </Carrusel>
                    </section>
                </div>
            </article >
            <article onClick={() => setMenucom(false)} className={Menucom ? 'Close-Menu on' : 'Close-Menu off'} />
        </>
    )
}

export default Compartir
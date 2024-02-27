import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import '../Styles/Recen.css';
import Carrusel from './Carrusel';
import Card from './Card';
import { SwiperSlide } from "swiper/react";

const Recent = () => {
    const [data, setData] = useState([{}]);
    
    useEffect(()=>{
        setData(recent)
    },[])
    let breakpoints = {
        890: {
            slidesPerView: 2,
            speed: 700,
        },
        1100: {
            slidesPerView: 3,
            speed:640,
        }
    }
    return (
        <article className="Recent-news" >
            <h2 className='Title-reciente'>Artículos más recientes</h2>
            {data ? (
                <Carrusel breakpoints={breakpoints}>
                    {data?.map((user) => (
                        <SwiperSlide key={user.Pic}>
                            <Card unit={user} />
                        </SwiperSlide>
                    ))}
                </Carrusel>
            ) : (
                <Loading />
            )
            }
            <h4 className='Title-flash'>
                Artículos Flash
            </h4>
        </article >
    );
};

export default Recent;

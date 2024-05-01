import React from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Styles/carruselV2.css"
import 'swiper/css/effect-fade';
const CarruselV2 = ({ children, pagination }) => {
    return (
        <div className='Container-seccion'>
            <div className='Containe-slider-seccion'>
                <Swiper
                    modules={[EffectFade, Navigation, Pagination]}
                    loop={true}
                    effect={'fade'}
                    slidesPerView={1}
                    simulateTouch={false}
                    pagination={pagination}
                >
                    {children}
                    <img src="" alt="" />
                </Swiper>
            </div>
        </div>
    )
}

export default CarruselV2
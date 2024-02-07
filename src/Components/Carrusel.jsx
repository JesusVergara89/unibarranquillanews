import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';
import "../Styles/carrusel.css"
const Carrusel = ({ data }) => {
    return (
        <div className='Containe'>
            <div className='Containe-slider'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    speed={500}
                    slidesPerView={1}
                    navigation
                    pagination={{
                        el: ".pagination",
                        clickable: true,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                        },
                        880: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {data?.map((user) => (
                        <SwiperSlide key={user.Pic}>
                            <Card unit={user} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="pagination" />
        </div>


    );
};

export default Carrusel
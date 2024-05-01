import React from 'react'
import { useSwiper } from 'swiper/react';

const Button_next = () => {
    const swiper = useSwiper();
    return (
        <div className='pagination-controls'>
            <button className='Button-pagi on' onClick={() => swiper.slidePrev()}>
                <i className='bx bx-chevron-left' />
            </button>
            <button className='Button-pagi on' onClick={() => swiper.slideNext()}>
                <i className='bx bx-chevron-right' />
            </button>
        </div>

    )
}

export default Button_next
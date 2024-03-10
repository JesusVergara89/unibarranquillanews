import React from 'react'
import Carrusel from '../Carrusel'
import { SwiperSlide } from 'swiper/react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Article_skeleto = () => {
    let breakpoints = {
        700: {
            slidesPerView: 2,
            pagination: {
                clickable: false
            }
        },
        1100: {
            slidesPerView: 3,
            pagination: {
                clickable: true
            }
        }
    }
    return (
        <Carrusel breakpoints={breakpoints}>
            {Array(5).fill(0).map(() => (
                <SwiperSlide>
                    <div className="article-card">
                        <Skeleton height={150} />
                        <Skeleton height={60} />
                        <div className="card-description">
                            <Skeleton height={70} />
                        </div>
                        <Skeleton width={'40%'} style={{marginLeft:'30%'}} count={2} />
                    </div>
                </SwiperSlide>
            ))}
        </Carrusel>
    )
}

export default Article_skeleto
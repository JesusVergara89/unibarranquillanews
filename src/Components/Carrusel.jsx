import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../Styles/carrusel.css"
const Carrusel = ({ children, breakpoints }) => {
    return (
        <div className='Containe'>
            <div className='Containe-slider'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    slidesPerView={1}
                    navigation
                    simulateTouch={false}
                    pagination={{
                        dynamicBullets: true
                    }}
                    longSwipesRatio={0.1}
                    breakpoints={breakpoints}
                >
                    {children}
                </Swiper>
            </div>
        </div>
    );
};

export default Carrusel
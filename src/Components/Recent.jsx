import Loading from './Loading';
import '../Styles/Recen.css';
import Carrusel from './Carrusel';
import Card from './Card';
import { SwiperSlide } from "swiper/react";
import useSeccion from '../Hooks/useSeccion';
const Recent = () => {
    let { update } = useSeccion()
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
        },
    }
    return (
        <article className="Recent-news" >
            <h2 className='Title-reciente'>Artículos más recientes</h2>
            {update ? (
                <Carrusel breakpoints={breakpoints}>
                    {update.map((user) => (
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

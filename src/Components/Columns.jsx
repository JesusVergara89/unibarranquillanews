import React, { useEffect, useState } from 'react'
import '../Styles/Columns.css'
import { Link, useNavigate } from 'react-router-dom'
import CarruselV2 from './CarruselV2'
import { SwiperSlide } from 'swiper/react'
import Button_next from './Button_next'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import Colums_skeleto from './Loading-skeleton/Colums_skeleto'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import * as ReactDOMServer from 'react-dom/server';
import HTMLReactParser from 'html-react-parser'


const Columns = ({ user, database, Coleccion = 'Articles', active = false, name }) => {
    const [Datas, setDatas] = useState()
    const Obtencion = () => {
        const articleRef = collection(database, Coleccion)
        const q = query(articleRef, orderBy('createdAt', 'desc'), limit(4));
        getDocs(q)
            .then((resp) => {
                setDatas(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }
    useEffect(() => {
        Obtencion()
    }, [])
    const TimeReading = (text, wordsPerMinutes = 200) => {
        const words = text.trim().split(/\s+/).length;
        const timeToReadPerMinutes = words / wordsPerMinutes;
        const RoundedTimeRead = Math.ceil(timeToReadPerMinutes);
        return RoundedTimeRead;
    }
    const pagination = {
        clickable: false,
        renderBullet: function (index, className) {
            return ReactDOMServer.renderToStaticMarkup(
                <div className={`${className} Seccion_imagen `} >
                    <a href={!active ? `#/${user.Url}/${Datas?.[index].id}` : `#/${name}/${user.Url}/${Datas?.[index].id}`} className='Mini_cards'>
                        <img src={Datas?.[index].imageUrl} loading='lazy' />
                        <section className='Informacion_news'>
                            <h3>{truncateText(Datas?.[index].title, 40)}</h3>
                            <div className='text'>
                            {HTMLReactParser(truncateText(Datas?.[index].description, 80))}
                            </div>
                            <div className='Imformation_date'>
                                <p>{Datas?.[index].createdAt.toDate().toLocaleDateString('es-co', { day: 'numeric', month: 'short', year: 'numeric' }).replace('de', ' ')}</p>
                                <p>{TimeReading(Datas?.[index].description)} min. read</p>
                            </div>
                        </section>
                    </a>
                </div >

            )
        },
    };
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        } else {
            return text;
        }
    }
    const navegar = useNavigate()
    const nave = (seccion, id) => {
        navegar(`/${seccion}/${id}`)
    }
    return (
        <article className='container_column'>
            <div className='Vinculo'>
                <Link className='enlace-flash' to={!active ? `/${user.Url}` : `/${name}/${user.Url}`}>{user.dataTitle.toLowerCase()}</Link>
                <i onClick={() => navegar(`${user.Url}`)} className='bx bxs-plus-circle' ></i>
            </div>
            {Datas ?
                <CarruselV2 pagination={pagination}>
                    {Datas.map(dato => (
                        <SwiperSlide key={dato.id}>
                            <div className='Noticia-actual' key={dato.id}>
                                <LazyLoadImage onClick={() => nave(user.Url, dato.id)} className='Photo-seccion'
                                    src={dato.imageUrl}
                                    effect='blur'
                                    placeholderSrc={dato.imageUrl}
                                />
                                <div className='Title-seccion'>
                                    <Link to={!active ? `/${user.Url}/${dato.id}` : `/${name}/${user.Url}/${dato.id}`}>{truncateText(dato.title, 80)}</Link>
                                    <p>
                                        {HTMLReactParser(dato.description.slice(0, 250) + '...')}
                                    </p>
                                    <Button_next />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </CarruselV2>
                : <Colums_skeleto />}
        </article >
    )
}

export default Columns
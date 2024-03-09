import React, { useEffect, useState } from 'react'
import '../Styles/Columns.css'
import { Link, useNavigate } from 'react-router-dom'
import CarruselV2 from './CarruselV2'
import { SwiperSlide } from 'swiper/react'
import Button_next from './Button_next'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db2, db3, db4, db5, db6, db7, db8, db9, db10 } from '../firebaseconfig'


const Columns = ({ user, indext }) => {
    const [Datas, setDatas] = useState()
    const ArrayDescrip = [
        {
            dataTitle: 'ACTUALIDAD',
            Url: 'ACTUALIDAD'
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            Url: 'CULTURA'
        },
        {
            dataTitle: 'DEPORTES',
            Url: 'DEPORTES'
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            Url: 'INVESTIGACION'
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            Url: 'ASUNTOS'
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            Url: 'VIDAU'
        },
        {
            dataTitle: 'EVENTOS',
            Url: 'EVENTOS'
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            Url: 'ENTREVISTA'
        },
        {
            dataTitle: 'TECNOLOGIA',
            Url: 'TECNOLOGIA'
        }
    ]
    const Obtencion = () => {
        const articleRef = collection(user, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"), limit(4));
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
            return (
                `<div class="${className} Seccion_imagen" >
            <a href="#/${ArrayDescrip[indext].Url}/${Datas?.[index].id}" class="Mini_cards">
            <img src="${Datas?.[index].imageUrl}" alt="" />
            <section class="Informacion_news">
                <h3>${Datas?.[index].title.slice(0, 50) + "..."}</h3>
                <p class="description_new">${Datas?.[index].description.slice(0, 80) + "..."}</p>
                <div class="Imformation_date">
                    <p>${Datas?.[index].createdAt.toDate().toLocaleDateString('es-co', { day: "numeric", month: "short", year: "numeric" }).replace('de', ' ')}</p>
                    <p>${TimeReading(Datas?.[index].description)} min. read</p>
                </div>
            </section>
            </a>
            </div>
            `
            )
        },
    };
    const TruncaText = (e) => {
        let result
        if (e.length >= 80) {
            result = e.slice(0, 80) + " ..."
        } else {
            result = e
        }
        return result
    }
    const navegar = useNavigate()
    const nave = (seccion, id) => {
        navegar(`/${seccion}/${id}`)
    }
    return (
        <article className="container_column">
            <div>
                <Link className='enlace-flash' to={`/${ArrayDescrip[indext].Url}`}>{ArrayDescrip[indext].dataTitle.toLowerCase()}</Link>
            </div>
            {Datas ?
                <CarruselV2 pagination={pagination}>
                    {Datas?.map((user, index) => (
                        <SwiperSlide key={index}>
                            <div className='Noticia-actual' key={index}>
                                <img onClick={() => nave(ArrayDescrip[indext].Url, user.id)} className='Photo-seccion' src={user.imageUrl} alt="" />
                                <div className='Title-seccion'>
                                    <p onClick={() => nave(ArrayDescrip[indext].Url, user.id)}>{TruncaText(user.title)}</p>
                                    <p>
                                        {user.description.slice(0, 250) + "..."}
                                    </p>
                                    <Button_next />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </CarruselV2>
                : ''}
        </article >
    )
}

export default Columns
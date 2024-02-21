import React from 'react'
import useSeccion from '../Hooks/useSeccion';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"
import CardSeccion from './CardSeccion';

const Seccion = () => {
    const ayOfBody = [
        {
            dataTitle: 'ACTUALIDAD',
            URL: 'ACTUALIDAD',
            dataDescription: 'Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad y en el mundo. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/people-IbzCMwYh.jpg'
        },
        {
            dataTitle: 'CULTURA Y ARTE',
            URL: 'CULTURA',
            dataDescription: 'Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/arte-k8i_N6UI.jpg'
        },
        {
            dataTitle: 'DEPORTES',
            URL: 'DEPORTES',
            dataDescription: 'Permanece actualizado sobre los logros y desempeños de nuestros equipos deportivos, tanto a nivel nacional como internacional. Mantente informado sobre eventos deportivos emocionantes, entrevistas con destacados atletas y análisis de campeonatos universitarios y de alto nivel. Sumérgete en el mundo del deporte donde la pasión y la excelencia se entrelazan en cada competición, desde lo local hasta lo global.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/deporte-j_dzjeIz.jpg'
        },
        {
            dataTitle: 'INVESTIGACIÓN Y DESARROLLO',
            URL: 'INVESTIGACION',
            dataDescription: 'Sumérgete en el vibrante tejido urbano donde convergen la vida estudiantil y la innovación académica. Explora los hallazgos más recientes y los proyectos pioneros desarrollados por nuestros destacados académicos y estudiantes. Adéntrate en las contribuciones que nuestra universidad ofrece al conocimiento y al progreso científico en el bullicioso entorno de la ciudad.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/microscope-4T5_YR6Z.jpg'
        },
        {
            dataTitle: 'MI UNIVERISIDAD, MI CIUDAD',
            URL: 'ASUNTOS',
            dataDescription: 'Aquí te sumergimos en la vida estudiantil y el dinamismo urbano que define nuestra comunidad. Desde eventos académicos hasta iniciativas comunitarias, descubre cómo nuestra universidad y la ciudad se entrelazan para enriquecer nuestra experiencia y dejar una marca positiva en nuestra comunidad.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/city-JHFa9wxe.jpg'
        },
        {
            dataTitle: 'VIDA ESTUDIANTIL',
            URL: 'VIDAU',
            dataDescription: 'Explora la experiencia estudiantil en Unibarranquilla. Desde consejos prácticos hasta perfiles de estudiantes destacados, te ofrecemos una visión completa de la vida en el campus.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/estudiantes-i2EmZUgl.jpg'
        },
        {
            dataTitle: 'EVENTOS',
            URL: 'EVENTOS',
            dataDescription: 'Entérate de los eventos próximos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria y de la ciudad. No te pierdas ninguna oportunidad de participar y ser parte activa de la comunidad.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/evento-naBSOljI.jpg'
        },
        {
            dataTitle: 'ENTREVISTAS Y PERFILES',
            URL: 'ENTREVISTA',
            dataDescription: 'Conoce a fondo a los líderes, académicos y personalidades que forman parte de nuestra ciudad, universidad y país. Descubre sus historias, experiencias y contribuciones a la educación superior.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/entrevista-JZNcz7B_.jpg'
        },
        {
            dataTitle: 'TECNOLOGIA',
            URL: 'TECNOLOGIA',
            dataDescription: '¡Bienvenido a la sección de Tecnología! Aquí, te mantenemos al día con las últimas novedades en gadgets, innovaciones y avances tecnológicos. Desde smartphones hasta inteligencia artificial, exploramos cómo la tecnología está moldeando nuestro futuro.',
            URL_Imgan: 'https://unibarranquilla-newspaper.netlify.app/assets/tech-v3RfZdNW.jpg'
        }
    ]
    const { update, status } = useSeccion()
    let { Seccion } = useParams()
    const [search, setSearch] = useState()
    useEffect(() => {
        scrollToTop()
        ayOfBody.filter(Title => Title.URL === Seccion).map(user => setSearch(user)
        )
    }, [Seccion])


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <article className='section-main'>
            <CardSeccion datataToShare={update} dataStatus={status} dataTitle={search?.dataTitle} dataDescription={search?.dataDescription} URL={search?.URL_Imgan} />
        </article>
    )
}

export default Seccion
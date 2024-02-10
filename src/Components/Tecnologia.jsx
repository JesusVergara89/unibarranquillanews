import React, { useEffect } from 'react'
import useTecnologia from '../Hooks/useTecnologia';
import CardNoticia from './CardNoticia';

const Tecnologia = () => {

    const tecnologias = useTecnologia()

    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/TECNOLOGIA'

    const dataTitle = 'TECNOLOGIA'
    const dataDescription = '¡Bienvenido a la sección de Tecnología! Aquí, te mantenemos al día con las últimas novedades en gadgets, innovaciones y avances tecnológicos. Desde smartphones hasta inteligencia artificial, exploramos cómo la tecnología está moldeando nuestro futuro.'

    useEffect(() => {
        scrollToTop()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <article className="engineering_section">
            <CardNoticia datataToShare={tecnologias} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
        </article>
    );
};

export default Tecnologia
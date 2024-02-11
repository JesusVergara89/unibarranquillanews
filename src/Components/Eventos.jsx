import React, { useEffect } from 'react'
import useEventos from '../Hooks/useEventos'
import CardNoticia from './CardNoticia'

/**
 * Functional component representing the Events and Activities section of the blog.
 * It showcases upcoming events, conferences, seminars, and social activities that enrich university life.
 */
const Eventos = () => {
  // Custom hook to fetch events
  const eventos = useEventos()
  // Current URL of the page
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EVENTOS'

  const dataTitle = 'EVENTOS'
  const dataDescription = 'Entérate de los eventos próximos, conferencias, seminarios y actividades sociales que enriquecen nuestra vida universitaria y de la ciudad. No te pierdas ninguna oportunidad de participar y ser parte activa de la comunidad.'

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
      <CardNoticia datataToShare={eventos} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  )
}

export default Eventos

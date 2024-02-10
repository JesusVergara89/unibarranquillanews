import React from 'react'
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
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EVENTO'

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={eventos} currentURL={currentURL} />
    </article>
  )
}

export default Eventos

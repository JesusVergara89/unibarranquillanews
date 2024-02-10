import React, { useEffect } from 'react'
import useCulture from '../Hooks/UseCulture'
import CardNoticia from './CardNoticia'

const Travel = () => {

  const culture = useCulture()

  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/TRAVEL'

  const dataTitle = 'CULTURA Y ARTE'
  const dataDescription = 'Explora la escena cultural y artística en Unibarranquilla. Reseñas de eventos, entrevistas con artistas locales y destacados, así como la cobertura de actividades culturales organizadas por la universidad.'

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
      <CardNoticia datataToShare={culture} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  )
}

export default Travel
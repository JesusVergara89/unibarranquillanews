import React from 'react'
import useVida from '../Hooks/useVida'
import Loading from './Loading'
import CardNoticia from './CardNoticia'

const Vida = () => {

  const vidas = useVida()
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/VIDA'

  const dataTitle = 'VIDA ESTUDIANTIL'
  const dataDescription = 'Explora la experiencia estudiantil en Unibarranquilla. Desde consejos prácticos hasta perfiles de estudiantes destacados, te ofrecemos una visión completa de la vida en el campus.'
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
      <CardNoticia datataToShare={vidas} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  )
}

export default Vida
import React from 'react';
import useResearch from '../Hooks/useResearch';
import Loading from './Loading';
import CardNoticia from './CardNoticia';

/**
 * Experience component displays information about research and development projects.
 * It retrieves data using the useResearch hook and renders it in a structured format.
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
  // Fetch research data using custom hook
  const researchs = useResearch();
  // Define current URL for sharing purposes
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/EXPERIENCE';

  const dataTitle = 'INVESTIGACIÓN Y DESARROLLO'
  const dataDescription = 'Sumérgete en el vibrante tejido urbano donde convergen la vida estudiantil y la innovación académica. Explora los hallazgos más recientes y los proyectos pioneros desarrollados por nuestros destacados académicos y estudiantes. Adéntrate en las contribuciones que nuestra universidad ofrece al conocimiento y al progreso científico en el bullicioso entorno de la ciudad.'

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
      <CardNoticia datataToShare={researchs} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  );
}

export default Experience;

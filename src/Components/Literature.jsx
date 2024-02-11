import React, { useEffect } from 'react';
import useSport from '../Hooks/useSport';
import CardNoticia from './CardNoticia';

/**
 * Component displaying information about university sports.
 * Fetches sports data using the useSport hook.
 * @returns {JSX.Element} Component JSX
 */
const Literature = () => {
  // Fetch sports data
  const sports = useSport();
  // Current URL of the component
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/DEPORTES';

  const dataTitle = 'DEPORTES'
  const dataDescription = 'Permanece actualizado sobre los logros y desempeños de nuestros equipos deportivos, tanto a nivel nacional como internacional. Mantente informado sobre eventos deportivos emocionantes, entrevistas con destacados atletas y análisis de campeonatos universitarios y de alto nivel. Sumérgete en el mundo del deporte donde la pasión y la excelencia se entrelazan en cada competición, desde lo local hasta lo global.'

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
      <CardNoticia datataToShare={sports} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  );
};

export default Literature;

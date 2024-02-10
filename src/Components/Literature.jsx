import React from 'react';
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
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/LITERATURE';

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={sports} currentURL={currentURL} />
    </article>
  );
};

export default Literature;

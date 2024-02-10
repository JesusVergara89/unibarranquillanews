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

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={researchs} currentURL={currentURL} />
    </article>
  );
}

export default Experience;

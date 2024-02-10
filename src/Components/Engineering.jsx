import useActualidad from '../Hooks/useActualidad';
import CardNoticia from './CardNoticia';


const Engineering = () => {

  const update = useActualidad();
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENGINEERING';

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={update} currentURL={currentURL} />
    </article>
  );
};

export default Engineering;

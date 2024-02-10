import useActualidad from '../Hooks/useActualidad';
import CardNoticia from './CardNoticia';


const Engineering = () => {

  const update = useActualidad();
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENGINEERING';

  const dataTitle = 'ACTUALIDAD'
  const dataDescription = 'Mantente al tanto de las últimas noticias, eventos y desarrollos en nuestra universidad y en el mundo. Desde anuncios importantes hasta logros destacados de nuestros estudiantes y profesores.'

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={update} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  );
};

export default Engineering;

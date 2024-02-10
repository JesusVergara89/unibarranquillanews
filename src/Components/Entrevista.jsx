import useEntrevista from '../Hooks/useEntrevista';
import CardNoticia from './CardNoticia';

const Entrevista = () => {
  const entrevista = useEntrevista();
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENTREVISTA';

  const dataTitle = 'ENTREVISTAS Y PERFILES'
  const dataDescription = 'Conoce a fondo a los líderes, académicos y personalidades que forman parte de nuestra ciudad, universidad y pais. Descubre sus historias, experiencias y contribuciones a la educación superior.'

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={entrevista} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
    </article>
  );
};

export default Entrevista;

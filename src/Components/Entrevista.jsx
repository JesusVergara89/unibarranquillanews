import useEntrevista from '../Hooks/useEntrevista';
import CardNoticia from './CardNoticia';

const Entrevista = () => {
  const entrevista = useEntrevista();
  const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ENTREVISTA';

  return (
    <article className="engineering_section">
      <CardNoticia datataToShare={entrevista} currentURL={currentURL} />
    </article>
  );
};

export default Entrevista;

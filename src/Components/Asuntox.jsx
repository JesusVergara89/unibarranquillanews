import useAsuntos from '../Hooks/useAsuntos';
import CardNoticia from './CardNoticia';

const Asuntox = () => {
    const asuntos = useAsuntos();
    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ASUNTOS';

    const dataTitle = 'MI UNIVERISIDAD, MI CIUDAD'
    const dataDescription = '!Aquí te sumergimos en la vida estudiantil y el dinamismo urbano que define nuestra comunidad. Desde eventos académicos hasta iniciativas comunitarias, descubre cómo nuestra universidad y la ciudad se entrelazan para enriquecer nuestra experiencia y dejar una marca positiva en nuestra comunidad.'

    return (
        <article className="engineering_section">
            <CardNoticia datataToShare={asuntos} currentURL={currentURL} dataTitle={dataTitle} dataDescription={dataDescription} />
        </article>
    );
};

export default Asuntox;

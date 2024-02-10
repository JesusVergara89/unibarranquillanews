import useAsuntos from '../Hooks/useAsuntos';
import CardNoticia from './CardNoticia';

const Asuntox = () => {
    const asuntos = useAsuntos();
    const currentURL = 'https://unibarranquilla-newspaper.netlify.app/#/ASUNTOS';

    return (
        <article className="engineering_section">
            <CardNoticia datataToShare={asuntos} currentURL={currentURL} />
        </article>
    );
};

export default Asuntox;

import '../Styles/Aboutblog.css';

/**
 * Functional component representing the about section of the blog.
 * It provides a brief introduction to the platform and its purpose.
 */
const Aboutblog = () => {
    return (
        <article className='About-this-blog'>

            {/* Introduction paragraph */}
            <p>
                ¡Bienvenidos a la plataforma digital independiente de noticias de la Universidad de Barranquilla!
            </p>

            {/* Link to official university website */}
            <a href="https://www.unibarranquilla.edu.co/" target="_blank">Página oficial de la universidad</a>

            {/* Description paragraph */}
            <p>
                En Unibarranquilla Noticias, estamos emocionados de ser tu fuente de información y actualización constante sobre todo lo que acontece en nuestra vibrante comunidad universitaria. Aquí encontrarás una variedad de temas que reflejan la diversidad de intereses y actividades que enriquecen nuestra vida académica y estudiantil. ¡Explora, descubre y mantente conectado!
            </p>

        </article>
    );
};

export default Aboutblog;

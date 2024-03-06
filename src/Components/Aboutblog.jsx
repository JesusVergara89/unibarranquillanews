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
                Unibarranquilla Noticias, te da la bienvenida a su plataforma digital independiente, ofreciendo información actualizada sobre la comunidad universitaria. Explora la diversidad de temas que enriquecen nuestra vida académica y mantente conectado con nosotros.
            </p>

            {/* Link to official university website */}
            <a href="https://www.unibarranquilla.edu.co/" target="_blank">Página oficial de la universidad</a>

        </article>
    );
};

export default Aboutblog;

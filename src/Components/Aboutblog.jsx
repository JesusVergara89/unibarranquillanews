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
                Bienvenidos a Unibarranquilla News Paper, tu fuente digital de información diversa. Explora nuestro periódico, donde encontrarás noticias actuales que van más allá de la vida universitaria, abarcando una amplia gama de temas que impactan nuestra vida diaria. Únete a nuestra plataforma independiente y mantente informado.
            </p>

            {/* Link to official university website */}
            <a href="https://www.unibarranquilla.edu.co/" target="_blank">Página oficial de la universidad</a>

        </article>
    );
};

export default Aboutblog;

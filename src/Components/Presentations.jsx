import '../Styles/Presentations.css'
import sky from '../Images/news.jpg'
import Columns from '../Components/Columns'
import Aboutblog from '../Components/Aboutblog'
import Socialmedia from '../Components/Socialmedia'
import Networks from '../Components/Networks'
import Recent from './Recent'
import FlashArticles from './FlashArticles'
import { Helmet } from "react-helmet";

const Presentations = ({ access }) => {
  return (
    <article className='main_page'>
      <Helmet>
        <title>UNIBAR | NEWSPAPER</title>
        <meta name="description" content="Bienvenidos a la plataforma digital independiente de noticias de la Universidad de Barranquilla,estamos emocionados de ser tu fuente de información y actualización" />
        <meta property="og:title" content="Plataforma digital independiente de noticias de la Universidad de Barranquilla" />
        <meta property="og:description" content="Bienvenidos a la plataforma digital independiente de noticias de la Universidad de Barranquilla,estamos emocionados de ser tu fuente de información y actualización" />
        <meta property="og:site_name" content="Unibarranquilla Newspaper" />
        <meta property="og:image" content="https://unibarranquilla-newspaper.netlify.app/assets/news-fm4YyC0m.jpg" />
        <meta property="og:image:url" content="https://unibarranquilla-newspaper.netlify.app/assets/news-fm4YyC0m.jpg" />
        <meta property="og:imagen:width" content="200" />
        <meta property="og:imagen:height" content="200" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://unibarranquilla-newspaper.netlify.app" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@Unibarranquilla Newspaper" />
        <meta property="twitter:title" content="Plataforma digital independiente de noticias de la Universidad de Barranquilla" />
        <meta property="twitter:description" content="Bienvenidos a la plataforma digital independiente de noticias de la Universidad de Barranquilla,estamos emocionados de ser tu fuente de información y actualización" />
        <meta property="twitter:image" content="https://unibarranquilla-newspaper.netlify.app/assets/news-fm4YyC0m.jpg" />

      </Helmet>
      <div className='Video'>
        <img src={sky} alt="" />
        <h1>WELCOME</h1>
        <h2>UNIVERSITY</h2>
        <h3>INDEPENDET</h3>
        <h4>NEWSPAPER</h4>
      </div>

      <Aboutblog />

      <Recent />

      <FlashArticles access={access} />

      <Columns />

      <Networks />

      <Socialmedia />

    </article>
  )
}

export default Presentations
import '../Styles/Presentations.css'
import sky from '../Images/news.jpg'
import Columns from '../Components/Columns'
import Aboutblog from '../Components/Aboutblog'
import Socialmedia from '../Components/Socialmedia'
import Networks from '../Components/Networks'
import FlashArticles from './FlashArticles'
import { useEffect } from 'react'

const Presentations = ({ IsLogged }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop()
  }, [])


  return (
    <article className='main_page'>
      <div className='Video'>
        <img src={sky} alt="" />
        <h1>WELCOME</h1>
        <h2>UNIVERSITY</h2>
        <h3>INDEPENDET</h3>
        <h4>NEWSPAPER</h4>
      </div>

      <Aboutblog />

      {/*<Recent />*/}

      <FlashArticles IsLogged={IsLogged} />

      <Columns />

      <Networks />

      <Socialmedia />

    </article>
  )
}

export default Presentations
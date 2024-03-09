import '../Styles/Presentations.css'
import sky from '../Images/news.jpg'
import Columns from '../Components/Columns'
import Aboutblog from '../Components/Aboutblog'
import Socialmedia from '../Components/Socialmedia'
import Networks from '../Components/Networks'
import FlashArticles from './FlashArticles'
import { useEffect } from 'react'
import { db2, db3, db4, db5, db6, db7, db8, db9, db10 } from '../firebaseconfig'

const Presentations = ({ IsLogged }) => {
  const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop()
    prueba() 
  }, [])

  const prueba = () => {
    arrayOfDataBase.map((user, index) => (
      console.log('entre')
    ))
  }
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

      <FlashArticles IsLogged={IsLogged} />

      {arrayOfDataBase.map((user, index) => (
        <Columns user={user} index={index} />
      ))
      }

      <Networks />

      <Socialmedia />

    </article>
  )
}

export default Presentations
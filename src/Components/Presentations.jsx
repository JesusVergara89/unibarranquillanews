import '../Styles/Presentations.css'
import sky from '../Images/news.jpg'
import Columns from '../Components/Columns'
import Aboutblog from '../Components/Aboutblog'
import Socialmedia from '../Components/Socialmedia'
import Networks from '../Components/Networks'
import FlashArticles from './FlashArticles'

const Presentations = ({access}) => {

  //const [windowWidt, setWindowWidt] = useState((window.innerWidth))
  //window.onresize = function () {
  //  setWindowWidt((window.innerWidth))
  //}

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

      <FlashArticles access={access} />

      <Columns />

      <Networks />

      <Socialmedia />

    </article>
  )
}

export default Presentations
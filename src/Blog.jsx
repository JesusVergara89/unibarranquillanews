import React, { Suspense, lazy, useEffect, } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
const Singlearticle = lazy(() => import('./Components/Singlearticle'))
const Seccion = lazy(() => import('./Components/Seccion'))
const Workus = lazy(() => import('./Components/Workus'))
const Containerpost = lazy(() => import('./Components/Blognews/component/Containerpost'))
const Blogarticle = lazy(() => import('../src/Components/Blognews/component/Blogarticle'))
const Theblog = lazy(() => import('./Components/Theblog'))
const Singlearticlescience = lazy(() => import('./Components/ScienceComponents/Singlearticlescience'))
const Createdarticles = lazy(() => import('./Components/Createdarticles'))
const RegisterAuth = lazy(() => import('./Components/Auth/RegisterAuth'))
import Aboutblog from './Components/Aboutblog'
import FlashArticles from './Components/FlashArticles'
import Networks from './Components/Networks'
import Socialmedia from './Components/Socialmedia'
import news from './Images/news.jpg'
import blog from './Images/blogmain.jpg'
import Columns from './Components/Columns';
import Loading from './Components/Loading'
import useRouter from './Hooks/useRouter'
import { db } from './firebaseconfig'
import katex from "katex";
import "katex/dist/katex.css";
import ForgotPassword from './Components/ForgotPassword'

function Blog() {
  //const [reloadPage, setReloadPage] = useState(false)

  const { ArrayofRouter } = useRouter()
  /*FILTRADO DE LAS SECCIONES QUE NO TIENE SUBSECCION Y QUE NO CONTENGA LA SECCIÓN ARTICLE */
  let filterarrayOfDataBase = ArrayofRouter.filter(data => !data.Subseccion && data.Database != db)
  /*FILTRADO DE LAS SUBSECCION Y QUE NO CONTENGA LA SECCIÓN ARTICLE */
  let filterarrayOfSubseccion = ArrayofRouter.filter(data => data.Subseccion && data.Database != db)
  const navigateBlog = useNavigate()
  const navigateScience = useNavigate()
  window.katex = katex;
  const Home = () => {
    return (
      <article className='main_page'>
        <div className='Video'>
          <img src={news} alt="" />
          <h1>WELCOME</h1>
          <h2>UNIVERSITY</h2>
          <h3>INDEPENDET</h3>
          <h4>NEWSPAPER</h4>
        </div>

        <Aboutblog />

        <FlashArticles />
        {filterarrayOfDataBase?.map((user, index) => (
          <Columns key={index} user={user} database={user.Database} />
        ))
        }

        {/* THIS SECTIONS HACE THE SAME CLASS JUST BECAUSE USE THE SAME CLASS FOR SIZE */}
        {filterarrayOfSubseccion?.map((user, index) => (
          < div className="To-the-blog"
            onClick={() => navigateScience(user.Url)}
            key={index}
          >
            <img src={user.Img} alt="" />
            <h2 className='To-the-blog-h2'
              onClick={() => navigateScience(user.Url)}
            >{user.dataTitle}</h2>
          </div>
        ))}
        {/** THIS SECTIONS HACE THE SAME CLASS JUST BECAUSE USE THE SAME CLASS FOR SIZE*/}
        <div className="To-the-blog"
          onClick={() => navigateBlog(`/READBLOG`)}
        >
          <img src={blog} alt="" />
          <h2 className='To-the-blog-h2-1'
            onClick={() => navigateBlog(`/READBLOG`)}
          >Blog</h2>
        </div>

        <Networks />

        <Socialmedia />
      </article>
    )
  }
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className='Blog'>
      <Header />
      <Flotan />
      <Routes>
        <Route path='/'
          element={
            <Home />
          }
        />
        <Route path='/:name'
          element={
            <Suspense fallback={<Loading />}>
              <Seccion />
            </Suspense>
          }
        />
        <Route path='/:name/:id'
          element=
          {
            <Suspense fallback={<Loading />}>
              <Singlearticle />
            </Suspense>
          }
        />
        <Route path='/:name/:id/:idSub'
          element=
          {
            <Suspense fallback={<Loading />}>
              <Singlearticlescience />
            </Suspense>
          }
        />

        <Route path='/OPENPOSSITIONS'
          element={
            <Suspense fallback={<Loading />}>
              <Workus />
            </Suspense>
          }
        />
        <Route path='/BLOG'
          element={
            <Suspense fallback={<Loading />}>
              <Containerpost />
            </Suspense>
          }
        />
        <Route path='/BLOGARTICLE/:id'
          element={
            <Suspense fallback={<Loading />}>
              <Blogarticle />
            </Suspense>
          }
        />
        <Route path='/READBLOG'
          element={
            <Suspense fallback={<Loading />}>
              <Theblog />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin />} />
        {/* <Route path='FORGOT-PASSWORD' element={<ForgotPassword />} />*/}
        <Route element={<RoutesProtecteds />}>
          <Route
            path='/CREATE'
            element={
              <Suspense fallback={<Loading />}>
                <Createdarticles />
              </Suspense>
            }
          />
          <Route
            path='/REGISTER'
            element={
              <Suspense fallback={<Loading />}>
                <RegisterAuth />
              </Suspense>
            }
          />

        </Route>
      </Routes>

    </div >
  )
}

export default Blog
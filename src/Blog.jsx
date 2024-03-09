import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Workus from './Components/Workus'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import CompanyCollaboratorAccess from './Components/CompanyCollaboratorAccess'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
import Containerpost from './Components/Blognews/component/Containerpost'
import Blogarticle from '../src/Components/Blognews/component/Blogarticle'
import Theblog from './Components/Theblog'
import Singlearticle from './Components/Singlearticle'
import Seccion from './Components/Seccion'
import Aboutblog from './Components/Aboutblog'
import FlashArticles from './Components/FlashArticles'
import Networks from './Components/Networks'
import Socialmedia from './Components/Socialmedia'
import news from './Images/news.jpg'
import SectionNews from './Components/SectionNews'
import { db10, db2, db3, db4, db5, db6, db7, db8, db9 } from './firebaseconfig'
import blog from './Images/blogmain.jpg'
import Columns from './Components/Columns';

function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)

  ////////////////////////////////////////////////////
  const navigateFunctions = [
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate(),
    useNavigate()
  ];

  const arrayOfDataBase = [db2, db3, db4, db5, db6, db7, db8, db9, db10];

  const navigateBlog = useNavigate()

  //////////////////////////////////////////

  return (
    <div className='Blog'>
      <Header reloadPage={reloadPage} setReloadPage={setReloadPage} />
      <Flotan />
      <Routes>
        <Route path='/'
          element={
            <article className='main_page'>
              <div className='Video'>
                <img src={news} alt="" />
                <h1>WELCOME</h1>
                <h2>UNIVERSITY</h2>
                <h3>INDEPENDET</h3>
                <h4>NEWSPAPER</h4>
              </div>

              <Aboutblog />

              <FlashArticles IsLogged={IsLogged} />
              {arrayOfDataBase.map((user, index) => (
                <Columns user={user} indext={index} />
              ))
              }

              <div className="To-the-blog"
                onClick={() => navigateBlog(`/READBLOG`)}
              >
                <img src={blog} alt="" />
                <h2
                  onClick={() => navigateBlog(`/READBLOG`)}
                >Blog</h2>
              </div>

              <Networks />

              <Socialmedia />

            </article>
          }
        />
        <Route path='/:name'
          element={<Seccion />}
        />
        <Route path='/:name/:id'
          element={<Singlearticle />}
        />
        <Route path='/OPENPOSSITIONS'
          element={<Workus />}
        />
        <Route path='/BLOG'
          element={<Containerpost />}
        />
        <Route path='/BLOGARTICLE/:id'
          element={<Blogarticle />}
        />
        <Route path='/READBLOG'
          element={<Theblog />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin IsLogged={IsLogged} setIsLogged={setIsLogged} />} />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route
            path='/COLLABORATORS'
            element={<CompanyCollaboratorAccess IsLogged={IsLogged} setIsLogged={setIsLogged} />}
          />
        </Route>
      </Routes>

    </div>
  )
}

export default Blog
import React, { Suspense, lazy, useEffect, useState } from 'react'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound'
import useAccess from './Hooks/useAcces'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from './firebaseconfig'
import Loading from './Components/Loading'
import Ruta from './Components/Ruta'
import useSeccion from './Hooks/useSeccion'
import Theblog from './Components/Theblog'

const SeccionA = lazy(() => import("./Components/Seccion"))
const SeccionId = lazy(() => import("./Components/SeccionId"))
const Workus = lazy(() => import("./Components/Work"))
const Containerpost = lazy(() => import("./Components/Blognews/component/Containerpost"))
const Blogarticle = lazy(() => import("./Components/Blognews/component/Blogarticle"))
const ArticleForRead = lazy(() => import("./Components/ArticleForRead"))
const CompanyCollaboratorAccess = lazy(() => import("./Components/CompanyCollaboratorAccess"))
const Longin = lazy(() => import("./Components/Longin"))

function Blog() {
  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)
  const access = useAccess()
  const { update, status } = useSeccion()
  const [articles, setArticles] = useState([{}])
  useEffect(() => {
    const articleRef = collection(db, "Articles")
    const q = query(articleRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setArticles(articles)
    })
  }, [reloadPage, access])
  return (
    <div className='Blog'>
      <Header reloadPage={reloadPage} setReloadPage={setReloadPage} />
      <Flotan />
      <Routes>
        <Route path='/'
          element={<Presentations access={access} update={update} />}
        />
        <Route path='/:Seccion'
          element={<Ruta />}
        />
        <Route path='/:Seccion/pages/:Pagina'
          element={
            <Suspense fallback={<Loading />}>
              <SeccionA />
            </Suspense>
          }
        />
        <Route path='/:Seccion/:Id'
          element={
            <Suspense fallback={<Loading />}>
              <SeccionId />
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
              <Theblog/>
            </Suspense>
          }
        />
        <Route path='/ARTICLE/:id'
          element={
            <Suspense fallback={<Loading />}>
              <ArticleForRead />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={
          <Suspense fallback={<Loading />}>
            <Longin access={access} IsLogged={IsLogged} setIsLogged={setIsLogged} />
          </Suspense>
        } />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route
            path='/COLLABORATORS'
            element={
              <Suspense fallback={<Loading />}>
                <CompanyCollaboratorAccess />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default Blog
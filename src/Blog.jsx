import React, { Suspense, lazy, useEffect, useState } from 'react'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import CompanyCollaboratorAccess from './Components/CompanyCollaboratorAccess'
import useAccess from './Hooks/useAcces'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
import { useDispatch, useSelector } from 'react-redux'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from './firebaseconfig'
import ArticleForRead from './Components/ArticleForRead'
import Loading from './Components/Loading'

const Seccion = lazy(() => import("./Components/Seccion"))
const SeccionId = lazy(() => import("./Components/SeccionId"))
const Workus = lazy(() => import("./Components/Work"))
function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)

  const access = useAccess()

  const dispatch = useDispatch();

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
          element={<Presentations access={access} />}
        />
        <Route path='/:Seccion'
          element={
            <Suspense fallback={<Loading />}>
              <Seccion />
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
        <Route path='/ARTICLE/:id'
          element={<ArticleForRead />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin access={access} IsLogged={IsLogged} setIsLogged={setIsLogged} />} />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route
            path='/COLLABORATORS'
            element={<CompanyCollaboratorAccess />}
          />
        </Route>
      </Routes>

    </div>
  )
}

export default Blog
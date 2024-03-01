import React, { useEffect, useState } from 'react'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
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


function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)

  return (
    <div className='Blog'>
      <Header reloadPage={reloadPage} setReloadPage={setReloadPage} />
      <Flotan />
      <Routes>
        <Route path='/'
          element={<Presentations IsLogged={IsLogged} />}
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
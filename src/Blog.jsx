import React, { useEffect, useState } from 'react'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import Asuntox from './Components/Asuntox'
import Vida from './Components/Vida'
import Eventos from './Components/Eventos'
import Entrevista from './Components/Entrevista'
import Workus from './Components/Workus'
import Tecnologia from './Components/Tecnologia'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import CompanyCollaboratorAccess from './Components/CompanyCollaboratorAccess'
import RoutesProtecteds from './Components/RoutesProtecteds'
import Header from './Components/Header'
import Flotan from './Components/Flotan'
import ArticleForRead from './Components/ArticleForRead'
import Containerpost from './Components/Blognews/component/Containerpost'
import Blogarticle from '../src/Components/Blognews/component/Blogarticle'
import Theblog from './Components/Theblog'
import useAccess from './Hooks/useAcces'
import Culture from './Components/Culture'
import Actualidad from './Components/Actualidad'
import Deportes from './Components/Deportes'
import Investigacion from './Components/Investigacion'
import Singlearticle from './Components/Singlearticle'


function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const [reloadPage, setReloadPage] = useState(false)

  const access = useAccess()
   
  return (
    <div className='Blog'>
      <Header reloadPage={reloadPage} setReloadPage={setReloadPage} />
      <Flotan />
      <Routes>
        <Route path='/'
          element={<Presentations  access={access} />}
        />
        <Route path='/ACTUALIDAD'
          element={<Actualidad access={access}  />}
        />
        <Route path='/CULTURA'
          element={<Culture access={access} />}
        />
        <Route path='/DEPORTES'
          element={<Deportes access={access} />}
        />
        <Route path='/INVESTIGACION'
          element={<Investigacion access={access}  />}
        />
        <Route path='/ASUNTOS'
          element={<Asuntox access={access}  />}
        />
        <Route path='/VIDAU'
          element={<Vida access={access} />}
        />
        <Route path='/EVENTOS'
          element={<Eventos access={access} />}
        />
        <Route path='/ENTREVISTA'
          element={<Entrevista access={access} />}
        />
        <Route path='/OPENPOSSITIONS'
          element={<Workus />}
        />
        <Route path='/TECNOLOGIA'
          element={<Tecnologia access={access} />}
        />
        <Route path='/BLOG'
          element={<Containerpost />}
        />
        <Route path='/BLOGARTICLE/:id'
          element={<Blogarticle />}
        />
        <Route path='/SINGLEARTICLE/:data/:id'
          element={<Singlearticle access={access} />}
        />
        <Route path='/ARTICLE/:id'
          element={<ArticleForRead />}
        />
         <Route path='/READBLOG'
          element={<Theblog />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin access={access}  IsLogged={IsLogged} setIsLogged={setIsLogged} />} />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route
            path='/COLLABORATORS'
            element={<CompanyCollaboratorAccess access={access}  IsLogged={IsLogged} setIsLogged={setIsLogged} />}
          />
        </Route>
      </Routes>

    </div>
  )
}

export default Blog
import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import Engineering from './Components/Engineering'
import Travel from './Components/Travel'
import Literature from './Components/Literature'
import Experience from './Components/Experience'
import Asuntox from './Components/Asuntox'
import Vida from './Components/Vida'
import Eventos from './Components/Eventos'
import Entrevista from './Components/Entrevista'
import Workus from './Components/Workus'
import Tecnologia from './Components/Tecnologia'
import NotFound from './Components/NotFound'
import Longin from './Components/Longin'
import CompanyCollaboratorAccess from './Components/CompanyCollaboratorAccess'
import useAccess from './Hooks/useAcces'
import RoutesProtecteds from './Components/RoutesProtecteds'


function Blog() {

  const [IsLogged, setIsLogged] = useState(false)

  const access = useAccess()

  useEffect(() => {
    console.log("wxyz");
  }, [IsLogged]);

  return (
    <div className='Blog'>

      <Header />

      <Routes>
        <Route path='/'
          element={<Presentations />}
        />
        <Route path='/ACTUALIDAD'
          element={<Engineering />}
        />
        <Route path='/CULTURA'
          element={<Travel />}
        />
        <Route path='/DEPORTES'
          element={<Literature />}
        />
        <Route path='/INVESTIGACION'
          element={<Experience />}
        />
        <Route path='/ASUNTOS'
          element={<Asuntox />}
        />
        <Route path='/VIDAU'
          element={<Vida />}
        />
        <Route path='/EVENTOS'
          element={<Eventos />}
        />
        <Route path='/ENTREVISTA'
          element={<Entrevista />}
        />
        <Route path='/OPENPOSSITIONS'
          element={<Workus />}
        />
        <Route path='/TECNOLOGIA'
          element={<Tecnologia />}
        />
        <Route path="*" element={<NotFound />} />

        <Route path='/LOGIN' element={<Longin access={access} IsLogged={IsLogged} setIsLogged={setIsLogged} />} />

        <Route element={<RoutesProtecteds IsLogged={IsLogged} />}>
          <Route path='/COLLABORATORS' element={<CompanyCollaboratorAccess />} />
        </Route>
      </Routes>

    </div>
  )
}

export default Blog
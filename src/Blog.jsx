import React from 'react'
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
import Header from './Components/Header'
import Flotan from './Components/Flotan'



function Blog() {
  return (
    <div className='Blog'>
      <Header />
      <Flotan/>
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
      </Routes>

    </div>
  )
}

export default Blog
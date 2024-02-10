import React from 'react'
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



function Blog() {
  return (
    <div className='Blog'>

      <Header />

      <Routes>
        <Route path='/'
          element={<Presentations />}
        />
        <Route path='/ENGINEERING'
          element={<Engineering />}
        />
        <Route path='/TRAVEL'
          element={<Travel />}
        />
        <Route path='/LITERATURE'
          element={<Literature />}
        />
        <Route path='/EXPERIENCE'
          element={<Experience />}
        />
        <Route path='/ASUNTOS'
          element={<Asuntox />}
        />
        <Route path='/VIDA'
          element={<Vida />}
        />
        <Route path='/EVENTO'
          element={<Eventos />}
        />
        <Route path='/ENTREVISTA'
          element={<Entrevista />}
        />
        <Route path='/OPENPOSSITIONS'
          element={<Workus />}
        />
        <Route path='/TECNOLOGIA'
          element={<Tecnologia/>}
        />
         <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default Blog
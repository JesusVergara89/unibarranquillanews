import React from 'react'
import Header from './Components/Header'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import Engineering from './Components/Engineering'
import Travel from './Components/Travel'
import Literature from './Components/Literature'
import Experience from './Components/Experience'



function Blog() {
  return (
    <div className='Blog'>

      <Header />

      <Routes>
      <Route path='/'
          element={<Presentations />}
        />
        <Route path='/ENGINEERING'
          element={<Engineering/>}
        />
         <Route path='/TRAVEL'
          element={<Travel/>}
        />
        <Route path='/LITERATURE'
          element={<Literature/>}
        />
        <Route path='/EXPERIENCE'
          element={<Experience/>}
        />
      </Routes>

    </div>
  )
}

export default Blog
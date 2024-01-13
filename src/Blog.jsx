import React from 'react'
import Header from './Components/Header'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'
import Engineering from './Components/Engineering'



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
      </Routes>

    </div>
  )
}

export default Blog
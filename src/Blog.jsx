import React from 'react'
import Header from './Components/Header'
import Presentations from './Components/Presentations'
import { Route, Routes } from 'react-router-dom'



function Blog() {
  return (
    <div className='Blog'>

      <Header />

      <Routes>
      <Route path='/'
          element={<Presentations />}
        />
      
      </Routes>

    </div>
  )
}

export default Blog
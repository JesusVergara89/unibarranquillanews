import React from 'react'
import Presentations from './Components/Presentations'
import Header from './Components/Header'
import Columns from './Components/Columns'

function Blog() {
  return (
    <div className='Blog'>

      <Header />

      <Presentations />

      <Columns/>

    </div>
  )
}

export default Blog
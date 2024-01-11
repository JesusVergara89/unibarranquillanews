import React from 'react'
import Presentations from './Components/Presentations'
import Header from './Components/Header'
import Columns from './Components/Columns'
import Aboutblog from './Components/Aboutblog'

function Blog() {
  return (
    <div className='Blog'>

      <Header />

      <Presentations />

      <Aboutblog/>

      <Columns/>

    </div>
  )
}

export default Blog
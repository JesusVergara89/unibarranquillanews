import React, { useState } from 'react'
import Post from './Post'
import Formpost from './Formpost'
import '../styles/Containerpost.css'
import Register from './Register'

const Containerpost = () => {
  const [enterregister, setEnterregister] = useState(false)
  return (
    <article className="Container-post">
      {
        enterregister ?
          <Formpost />
          :
          <Register />
      }
      <Post />
    </article>
  )
}

export default Containerpost
import React, { useState } from 'react'
import Post from './Post'
import Formpost from './Formpost'
import '../styles/Containerpost.css'
import Register from './Register'

const Containerpost = () => {
  const [enterregister, setEnterregister] = useState(true)
  const enterToFormPost = () => setEnterregister(true)
  const outToFormPost = () => setEnterregister(false)
  return (
    <article className="Container-post">
      {
        enterregister ?
          <Formpost outToFormPost={outToFormPost} />
          :
          <Register enterToFormPost={enterToFormPost} />
      }
      <Post />
    </article>
  )
}

export default Containerpost
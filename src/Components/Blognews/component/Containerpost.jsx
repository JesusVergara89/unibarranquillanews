import React, { useState } from 'react'
import Post from './Post'
import Formpost from './Formpost'
import '../styles/Containerpost.css'
import Register from './Register'
import Singin from './Singin'

const Containerpost = () => {
  const [enterregister, setEnterregister] = useState(false)
  const enterToFormPost = () => setEnterregister(true)
  const outToFormPost = () => setEnterregister(false)
  return (
    <article className="Container-post">
      {
        enterregister ?
          <Formpost outToFormPost={outToFormPost} />
          :
          <Singin enterToFormPost={enterToFormPost} />
      }
      <Post />
    </article>
  )
}

export default Containerpost
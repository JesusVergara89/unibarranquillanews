import React from 'react'
import Post from './Post'
import Formpost from './Formpost'
import '../styles/Containerpost.css'

const Containerpost = () => {
  return (
    <article className="Container-post">
        <Post/>
        <Formpost/>
    </article>
  )
}

export default Containerpost
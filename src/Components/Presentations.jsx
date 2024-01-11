import React, { useEffect, useState } from 'react'
import '../Styles/Presentations.css'
import fractal from '../Images/geometric.jpg'
import bridge from '../Images/bridge.jpg'
import sky from '../Images/sky.jpg'

const Presentations = () => {

  //const [windowWidt, setWindowWidt] = useState((window.innerWidth))
  //window.onresize = function () {
  //  setWindowWidt((window.innerWidth))
  //}


  return (
    <div className='Video'>
      <img src={sky} alt="" />
      <h1>WELCOME</h1>
    </div>
  )
}

export default Presentations
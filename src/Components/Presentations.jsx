import React, { useState } from 'react'
import '../Styles/Presentations.css'
import fractal from '../Videos/fractals.mp4'
import ReactPlayer from 'react-player'

const Presentations = () => {

  const [windowWidt, setWindowWidt] = useState((window.innerWidth))

  window.onresize = function () {
    setWindowWidt((window.innerWidth))
  }
  
  return (
    <div className='Video'>
      <ReactPlayer
        url={fractal}
        width={windowWidt}
        height={windowWidt*0.5625}
        playing={true}
        muted={true}
        loop={true}
      />
    </div>
  )
}

export default Presentations
import React from 'react'
import '../Styles/Socialmedia.css'
import twiter from '../Images/twitterx.svg'

const Socialmedia = () => {
  return (
    <footer>
      <div className="footer-inter">
        <a href="https://www.instagram.com/unibarranquillanewspaper/" target="_blank">
          <i className='bx bxl-instagram'></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555932903808" target="_blank">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="https://twitter.com/unibanewspaper" target="_blank">
          <img src={twiter} alt="" />
        </a>
        <a href="mailto:unibarranquillanewspaper@gmail.com" target="_blank">
          <i className='bx bxl-gmail'></i>
        </a>
      </div>
    </footer>

  )
}

export default Socialmedia
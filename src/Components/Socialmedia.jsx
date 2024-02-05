import React from 'react';
import '../Styles/Socialmedia.css';

/**
 * Component for displaying social media links in the footer.
 * @returns {JSX.Element} Socialmedia component JSX
 */
const Socialmedia = () => {
  return (
    <footer>
      <div className="footer-inter">
        <a href="https://www.instagram.com/unibarranquillanewspaper/" target="_blank">
          <i className='bx bxl-instagram-alt'></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61555932903808" target="_blank">
          <i className='bx bxl-facebook'></i>
        </a>
        <a href="https://twitter.com/unibanewspaper" target="_blank">
          <i className='bx bxl-twitter'></i>
        </a>
        <a href="mailto:unibarranquillanewspaper@gmail.com" target="_blank">
          <i className='bx bxl-gmail'></i>
        </a>
      </div>
    </footer>
  );
};

export default Socialmedia;

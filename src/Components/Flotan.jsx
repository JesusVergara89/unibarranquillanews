import React from 'react'
import '../Styles/flotan.css'

const Flotan = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    };
    return (
        <div onClick={scrollToTop} className='Flotante'>
            <i className='bx bx-chevron-up'></i>
        </div>
    )
}

export default Flotan
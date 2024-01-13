import React from 'react'
import '../styles/Columns.css'
import { useNavigate } from 'react-router-dom'

const Columns = () => {
    

    const navigateEngi = useNavigate()    

    return (
        <div className="container">
            <button onClick={() => navigateEngi('/ENGINEERING')}  >
                <img onClick={() => navigateEngi('/ENGINEERING')} src="https://personal-data-base-of-photos.netlify.app/assets/8.3c3e05e1.jpg" />
            </button>

            <button >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/7.263d9146.jpg" />
            </button>

            <button  >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/5.b3f65e56.jpg" />
            </button>

            <button  >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/3.c93764da.png" />
            </button>

            <button >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/2.996cd67c.png" />
            </button>

            <button >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/1.21598796.jpg" />
            </button>

            <button >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/8.3c3e05e1.jpg" />
            </button>

            <button >
                <img  src="https://personal-data-base-of-photos.netlify.app/assets/7.263d9146.jpg" />
            </button>

        </div >
    )
}

export default Columns
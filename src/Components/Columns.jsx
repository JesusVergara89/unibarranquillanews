import React from 'react'
import '../Styles/Columns.css'
import { useNavigate } from 'react-router-dom'

const Columns = () => {
    

    const navigateEngi = useNavigate()
    
    const navigateTravel = useNavigate()

    return (
        <div className="container">
            <button onClick={() => navigateEngi('/ENGINEERING')}  >
                <img onClick={() => navigateEngi('/ENGINEERING')} src="https://photo-data-base.netlify.app/assets/engineering.057f9f57.jpg" />
            </button>

            <button onClick={() => navigateTravel('/TRAVEL')}  >
                <img onClick={() => navigateTravel('/TRAVEL')}  src="https://photo-data-base.netlify.app/assets/travel.bf0d0916.jpg" />
            </button>

            <button  >
                <img  src="https://photo-data-base.netlify.app/assets/literature.18726617.jpg" />
            </button>

            <button  >
                <img  src="https://photo-data-base.netlify.app/assets/experience.ad46d59e.jpg" />
            </button>

            <button >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
            </button>

            <button >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
            </button>

            <button >
                <img src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
            </button>

            <button >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
            </button>

        </div >
    )
}

export default Columns
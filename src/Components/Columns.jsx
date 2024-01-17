import React from 'react'
import '../Styles/Columns.css'
import { useNavigate } from 'react-router-dom'

const Columns = () => {
    

    const navigateEngi = useNavigate()
    
    const navigateTravel = useNavigate()

    const navigateLiterature = useNavigate()

    const navigateExperience = useNavigate()

    return (
        <div className="container">
            <button className='outside-btn' onClick={() => navigateEngi('/ENGINEERING')}  >
                <img onClick={() => navigateEngi('/ENGINEERING')} src="https://photo-data-base.netlify.app/assets/engineering.057f9f57.jpg" />
                <h2 >See more</h2>
            </button>

            <button id='outside-btn' onClick={() => navigateTravel('/TRAVEL')}  >
                <img onClick={() => navigateTravel('/TRAVEL')}  src="https://photo-data-base.netlify.app/assets/travel.bf0d0916.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' onClick={() => navigateLiterature('/LITERATURE')} >
                <img onClick={() => navigateLiterature('/LITERATURE')} src="https://photo-data-base.netlify.app/assets/literature.18726617.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' onClick={() => navigateExperience('/EXPERIENCE')} >
                <img onClick={() => navigateExperience('/EXPERIENCE')} src="https://photo-data-base.netlify.app/assets/experience.ad46d59e.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' >
                <img src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
                <h2 >See more</h2>
            </button>

            <button className='outside-btn' >
                <img  src="https://photo-data-base.netlify.app/assets/5.b3f65e56.jpg" />
                <h2 >See more</h2>
            </button>

        </div >
    )
}

export default Columns
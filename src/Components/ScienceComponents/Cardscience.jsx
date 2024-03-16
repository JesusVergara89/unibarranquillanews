import React from 'react'
import './Cardscience.css'

const Cardscience = ({actualizarEstado, subject, index, imgForCardScience}) => {
    return (
        <div className="Card-science"
            onClick={() => actualizarEstado(index)}
        >
            <img src={imgForCardScience} alt="" />
            <h2 className='Card-science-h2'
                onClick={() => actualizarEstado(index)}
            >{subject.name}</h2>
        </div>
    )
}

export default Cardscience
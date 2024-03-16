import React from 'react'
import './Cardscience.css'

const Cardscience = ({actualizarEstado, subject, index}) => {
    return (
        <div className="Card-science"
            onClick={() => actualizarEstado(index)}
        >
            <h2 className='Card-science-h2'
                onClick={() => actualizarEstado(index)}
            >{subject.name}</h2>
        </div>
    )
}

export default Cardscience
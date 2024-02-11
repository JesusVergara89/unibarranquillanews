import React from 'react'
import '../Styles/NotFound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigateHome = useNavigate()
    return (
        <div className="error-container">
            <h1 className="error-heading">Error 404</h1>
            <p className="error-message">La página que estás buscando no se encuentra.</p>
            <button onClick={() => navigateHome('/')} className="navigate-home">HOME</button>
        </div>
    )
}

export default NotFound
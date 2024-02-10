import React from 'react'
import '../Styles/NotFound.css'

const NotFound = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">Error 404</h1>
            <p className="error-message">La página que estás buscando no se encuentra.</p>
        </div>
    )
}

export default NotFound
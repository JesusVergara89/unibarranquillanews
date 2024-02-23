import React from 'react'
import '../Styles/NotFound.css'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div className="error-container">
            <Helmet>
                <title>Error</title>
                <meta name="description" content="La página que estás buscando no se encuentra." />
            </Helmet>
            <h1 className="error-heading">Error 404</h1>
            <p className="error-message">La página que estás buscando no se encuentra.</p>
            <Link to={('/')} className="navigate-home">HOME</Link>
        </div>
    )
}

export default NotFound
import React from 'react'

const CompanyCollaboratorAccess = ({setIsLogged}) => {

    const closeSesion = () => {
        setIsLogged(false)
    }
  return (
    <article className="main_collaborators">
        <h2>Colaboradores</h2>
        <button onClick={closeSesion} >cerrar sesión</button>
    </article>
  )
}

export default CompanyCollaboratorAccess
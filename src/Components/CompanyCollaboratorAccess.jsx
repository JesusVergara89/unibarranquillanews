import React from 'react'
import '../Styles/CompanyCollaboratorAccess.css'
import { useSelector } from 'react-redux'

const CompanyCollaboratorAccess = ({setIsLogged}) => {

  const name = useSelector(state => state.emailSlice)
  const lastName = useSelector(state => state.passwordSlice)

    const closeSesion = () => {
        setIsLogged(false)
    }
  return (
    <article className="main_collaborators">
        <h2>Colaboradores</h2>
        <h3>{`welcome ${name} ${lastName}`}</h3>
        <button onClick={closeSesion} >cerrar sesión</button>
    </article>
  )
}

export default CompanyCollaboratorAccess
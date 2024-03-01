import React, { useState } from 'react'
import '../Styles/CompanyCollaboratorAccess.css'
import { useSelector } from 'react-redux'
import Article from './Article'
import ArticleForm from './ArticleForm'
import ChangePassword from './ChangePassword'

const CompanyCollaboratorAccess = ({ IsLogged, setIsLogged }) => {

  const [getin, setGetin] = useState(false)

  const name = useSelector(state => state.emailSlice)
  const lastName = useSelector(state => state.passwordSlice)

  const closeSesion = () => {
    setIsLogged(false)
  }

  const functionOpen = () => {
    setGetin(!getin)
  }

  return (
    <article className="main_collaborators">
      <div className="main_collaborators-welcome-close-sesion">
        <h3>{`Welcome ${name} ${lastName}`}</h3>
        <button className='main_collaborators-btn' onClick={closeSesion} >cerrar sesión</button>
      </div>

      {getin ?
        <ChangePassword functionOpen={functionOpen} />
        :
        <div className="main_collaborators-articles">
          <button className='btn-change-pass' onClick={functionOpen}>Cambiar password</button>
          <div className="main_collaborators-articles-form">
            <ArticleForm />
          </div>
          <div className="main_collaborators-articles-article">
            <Article IsLogged={IsLogged} />
          </div>
        </div>}
    </article>
  )
}

export default CompanyCollaboratorAccess
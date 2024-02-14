import React from 'react'
import '../Styles/CompanyCollaboratorAccess.css'
import { useSelector } from 'react-redux'
import Article from './Article'
import ArticleForm from './ArticleForm'

const CompanyCollaboratorAccess = ({ setIsLogged }) => {

  const name = useSelector(state => state.emailSlice)
  const lastName = useSelector(state => state.passwordSlice)

  const closeSesion = () => {
    setIsLogged(false)
  }
  return (
    <article className="main_collaborators">
      <div className="main_collaborators-welcome-close-sesion">
        <h3>{`Welcome ${name} ${lastName}`}</h3>
        <button className='main_collaborators-btn' onClick={closeSesion} >cerrar sesión</button>
      </div>

      <div className="main_collaborators-articles">
        <div className="main_collaborators-articles-article">
          <Article />
        </div>
        <div className="main_collaborators-articles-form">
          <ArticleForm />
        </div>
      </div>
    </article>
  )
}

export default CompanyCollaboratorAccess
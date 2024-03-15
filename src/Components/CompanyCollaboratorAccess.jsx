import React, { useEffect, useState } from 'react'
import '../Styles/CompanyCollaboratorAccess.css'
import { useSelector } from 'react-redux'
import Article from './Article'
import ArticleForm from './ArticleForm'
import ChangePassword from './ChangePassword'
import { auth1 } from '../firebaseconfig'
import SinginAuth from './Auth/SinginAuth'


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

  const [enterregister, setEnterregister] = useState(false)
  const enterToFormPost = () => setEnterregister(true)
  const outToFormPost = () => setEnterregister(false)
  return (
    <article className="main_collaborators">

      {enterregister ?
        ''
        :
        <div className='Container-post-form'>
          <h2 className="Containes-post-rules-of-the-house-form">
            Inicia sesión para autenticarte
          </h2>
          <h3 className='Container-post-rules-form'> o </h3>
          <h3 className='Container-post-rules-form'>Resgistrate si aún no lo has hecho</h3>
        </div>
      }
      {
        enterregister ?
          <>
            <div className="main_collaborators-welcome-close-sesion">
              <h3>{`Welcome ${name} ${lastName}`}</h3>
              <button className='main_collaborators-btn' onClick={closeSesion} >cerrar sesión</button>
            </div>

            {getin ?
              <ChangePassword name={name} lastName={lastName} functionOpen={functionOpen} />
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
          </>
          :
          <div className="components-auth">
            <SinginAuth outToFormPost={outToFormPost} enterToFormPost={enterToFormPost} auth={auth1} />
          </div>

      }
    </article>
  )
}

export default CompanyCollaboratorAccess
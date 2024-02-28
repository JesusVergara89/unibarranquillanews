import React, { useState } from 'react'
import Extensivearticles from './Extensivearticles'
import CompanyCollaboratorAccess from './CompanyCollaboratorAccess'
import '../Styles/Createdarticles.css'

const Createdarticles = ({ access, IsLogged, setIsLogged }) => {
  const [off, setOff] = useState(true)
  const [flash, setFlash] = useState(false)
  const [extent, setExtent] = useState(false)
  const functionSelectFlash = () => {
    setFlash(true)
    setExtent(false)
    setOff(false)
  }
  const functionSelectExtent = () => {
    setFlash(false)
    setExtent(true)
    setOff(false)
  }
  return (
    <article className="create-articles">

      {off && <h2 className='which-one-2'> Elige una sección donde publicar</h2>}


      {off ?
        <div className="create-article-btns">
          <button onClick={functionSelectFlash} >Flash</button>
          <button onClick={functionSelectExtent} >Extensos</button>
        </div>
        :
        ''
      }

      <div className="create-articles-option">
        {flash ?
          <CompanyCollaboratorAccess access={access} IsLogged={IsLogged} setIsLogged={setIsLogged} />
          :
          ''
        }

        {extent ?
          <Extensivearticles access={access} IsLogged={IsLogged} setIsLogged={setIsLogged} />
          :
          ''
        }
      </div>



    </article>
  )
}

export default Createdarticles
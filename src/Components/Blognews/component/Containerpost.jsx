import React, { useState } from 'react'
import Post from './Post'
import Formpost from './Formpost'
import '../styles/Containerpost.css'
import Singin from './Singin'

const Containerpost = () => {
  const [enterregister, setEnterregister] = useState(false)
  const enterToFormPost = () => setEnterregister(true)
  const outToFormPost = () => setEnterregister(false)
  return (
    <article className="Container-post">
      {enterregister ?
        ''
        :
        <div className='Container-post-div'>
          <h2 className="Containes-post-rules-of-the-house">
            Bienvenido al blog de unibarranquilla news
          </h2>
          <h3 className='Container-post-rules'>En este blog no existen reglas estrictas que limiten tu expresión; eres libre de comunicarte como prefieras. La censura no tiene cabida aquí, y tu libertad de expresión es plenamente respetada. Para participar en las conversaciones, simplemente necesitas haber iniciado sesión. Además, puedes interactuar con otros usuarios comentando en sus publicaciones, expresando tu aprecio con likes y compartiendo contenido relevante. Esta plataforma se basa en el principio fundamental de la libertad de expresión y la participación activa de la comunidad.</h3>
        </div>
      }
      {
        enterregister ?
          <Formpost outToFormPost={outToFormPost} />
          :
          <Singin enterToFormPost={enterToFormPost} />
      }
      {enterregister ?
        <Post />
        :
        ''
      }

    </article>
  )
}

export default Containerpost
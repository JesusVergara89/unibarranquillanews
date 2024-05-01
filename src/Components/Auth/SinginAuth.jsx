import React, { useState } from 'react'
import './SinginAuth.css'
import RegisterAuth from './RegisterAuth'
import UsersinginAuth from './UsersinginAuth'

const SinginAuth = ({ enterToFormPost, outToFormPost, auth }) => {

  const [singinout, setSinginout] = useState(false)

  const createOrSignIn = () => setSinginout(!singinout)

  return (
    <article className="singin">

      {singinout ?

        <RegisterAuth auth={auth} createOrSignIn={createOrSignIn} enterToFormPost={enterToFormPost} />
        :
        <UsersinginAuth auth={auth} createOrSignIn={createOrSignIn} enterToFormPost={enterToFormPost} />
      }

    </article>
  )
}

export default SinginAuth
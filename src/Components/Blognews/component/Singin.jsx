import React, { useState } from 'react'
import '../styles/Singin.css'
import Register from './Register'
import Usersingin from './Usersingin'

const Singin = ({ enterToFormPost }) => {

    const [singinout, setSinginout] = useState(false)

    const createOrSignIn = () => setSinginout(!singinout)

    return (
        <article className="singin">

            {singinout ?

                <Register createOrSignIn={createOrSignIn} enterToFormPost={enterToFormPost} />
                :
                <Usersingin createOrSignIn={createOrSignIn} enterToFormPost={enterToFormPost}/>
            }

        </article>
    )
}

export default Singin
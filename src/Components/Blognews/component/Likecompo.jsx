import React from 'react'
import { auth } from '../../../firebaseconfig'
import { useAuthState } from 'react-firebase-hooks/auth'

const Likecompo = ({ id, likes }) => {
    const [user] = useAuthState(auth)
    return (
        <button className="likes-btn">
            {!likes?.includes(user.uid) ?
                <i className='bx bx-heart'></i>
                :
                <i className='bx bxs-heart' ></i>
            }
        </button>
    )
}

export default Likecompo
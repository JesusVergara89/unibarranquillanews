import React, { useEffect, useState } from 'react'
import useAccess from '../../Hooks/useAcces'
import { Acesscontext } from './Acesscontext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth2 } from '../../firebaseconfig'
const StatelAcess = ({ children }) => {
  const [IsLogged, setIsLogged] = useState()
  const [AccessInfor, setAccessInfor] = useState()
  
  useEffect(() => {
    onAuthStateChanged(auth2, (user) => {
      if (user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    });
  }, [])

  const user = auth2.currentUser;
  useEffect(() => {
    if (user != null) {
      setAccessInfor(
        {
          Name: user.displayName,
          PhotoUrl: user.photoURL
        }
      )
    } else {
      setAccessInfor(
        {
          Name: null,
          PhotoUrl: null
        }
      )
    }
  }, [user])

  const access = useAccess()
  const data = { access, IsLogged, AccessInfor }
  return (
    <Acesscontext.Provider value={data}>{children}</Acesscontext.Provider>
  )
}

export default StatelAcess
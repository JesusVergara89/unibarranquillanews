import React, { useEffect, useState } from 'react'
import useAccess from '../../Hooks/useAcces'
import { Acesscontext } from './Acesscontext'
import { onAuthStateChanged } from 'firebase/auth'
import { auth2 } from '../../firebaseconfig'
const StatelAcess = ({ children }) => {
  const [IsLogged, setIsLogged] = useState()
  const [AccessInfor, setAccessInfor] = useState()
  const [Admin, setAdmin] = useState(false)

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
  const AdminArray = [
    { name: 'jesus vergara', email: 'jesusmanuelv1989@gmail.com' }
    , { name: 'Brian Escorcia', email: 'naziegonzalez5@gmail.com' }
  ]
  console.log(Admin)
  useEffect(() => {
    if (user != null) {
      setAccessInfor(
        {
          Name: user.displayName,
          PhotoUrl: user.photoURL
        }
      )
      const isAdmin = AdminArray.some(data => data.name === user.displayName && data.email === user.email);
      setAdmin(isAdmin);
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
  const data = { access, IsLogged, AccessInfor, Admin }
  return (
    <Acesscontext.Provider value={data}>{children}</Acesscontext.Provider>
  )
}

export default StatelAcess
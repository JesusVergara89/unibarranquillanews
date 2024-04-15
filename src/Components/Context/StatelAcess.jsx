import React, { useEffect, useState } from 'react'
import useAccess from '../../Hooks/useAcces'
import { Acesscontext } from './Acesscontext'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth2 } from '../../firebaseconfig'
import { dataDecryp } from '../Crypto/Decryp'
import { toast } from 'react-toastify';
const StatelAcess = ({ children }) => {
  const [IsLogged, setIsLogged] = useState()
  const [AccessInfor, setAccessInfor] = useState()
  const [Admin, setAdmin] = useState(false)
  const [Check, setCheck] = useState(true)
  const email = window.localStorage.getItem('Email');
  const password = window.localStorage.getItem('Password');
  useEffect(() => {
    if (email && password) {
      setCheck(true)
    } else {
      setCheck(false)
    }
    onAuthStateChanged(auth2, (user) => {
      if (user) {
        setIsLogged(true)
        setCheck(false)
      } else {
        setIsLogged(false)
      }
    });
  }, [])

  useEffect(() => {
    let temporizador;
    if (Check) {
      temporizador = setTimeout(() => {
        signInWithEmailAndPassword(auth2, dataDecryp(email), dataDecryp(password))
          .then(() => toast('Bienvenido nuevamente', { type: 'success' }))
          .catch(() => {
            toast('¡Error! La sesión ha expirado. Por favor, vuelve a iniciar sesión.', { type: "error" })
            window.localStorage.clear()
            setCheck(false)
          })
      }, 5000);
    }

    return () => clearTimeout(temporizador);
  }, [Check]);

  const AdminArray = [
    { name: 'jesus vergara', email: 'jesusmanuelv1989@gmail.com' }
    , { name: 'brian escorcia', email: 'naziegonzalez5@gmail.com' }
  ]

  const user = auth2.currentUser;
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
  const data = { access, IsLogged, AccessInfor, Admin, Check }
  return (
    <Acesscontext.Provider value={data}>{children}</Acesscontext.Provider>
  )
}

export default StatelAcess
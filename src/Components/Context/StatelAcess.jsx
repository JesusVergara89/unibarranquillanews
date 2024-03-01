import React from 'react'
import useAccess from '../../Hooks/useAcces'
import { Acesscontext } from './Acesscontext'
const StatelAcess = ({children}) => {
    const access = useAccess()
    const data = { access }
  return (
    <Acesscontext.Provider value={data}>{children}</Acesscontext.Provider>
  )
}

export default StatelAcess
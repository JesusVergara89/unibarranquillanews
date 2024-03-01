import React from 'react'
import useAccess from '../../Hooks/useAcces'
import { Accescontext } from './AccesContext'

const StatAlacces = ({ children }) => {
    const access = useAccess()
    const data = { access }
    return (
        <Accescontext.Provider value={data}>
            {children}
        </Accescontext.Provider>
    )
}

export default StatAlacces
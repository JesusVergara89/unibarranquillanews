import { Navigate, Outlet } from 'react-router'
import { Acesscontext } from './Context/Acesscontext'
import { useContext } from 'react'

const RoutesProtecteds = () => {
    const { IsLogged} = useContext(Acesscontext)
    if (IsLogged) {
        return <Outlet />
    } else {
        return <Navigate to='/LOGIN' replace={true} />
    }
}

export default RoutesProtecteds
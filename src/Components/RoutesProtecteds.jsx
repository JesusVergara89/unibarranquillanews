import { Navigate, Outlet } from 'react-router'
import { Acesscontext } from './Context/Acesscontext'
import { useContext } from 'react'
import Loading from './Loading'
const RoutesProtecteds = () => {
    const { IsLogged, Check } = useContext(Acesscontext)
    if (IsLogged) {
        return <Outlet />
    } else if (Check) {
        return <Loading />
    } else {
        return <Navigate to='/LOGIN' replace={true} />
    }
}

export default RoutesProtecteds
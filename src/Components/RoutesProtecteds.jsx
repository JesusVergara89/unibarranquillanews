import { Navigate, Outlet } from 'react-router'

const RoutesProtecteds = ({ IsLogged }) => {
    if (IsLogged) {
        return <Outlet />
    } else {
        return <Navigate to='/LOGIN' />
    }
}

export default RoutesProtecteds
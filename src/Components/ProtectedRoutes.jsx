import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoutes = ({ IsLogged }) => {
    if (IsLogged) {
        return <Outlet />
    } else {
        return <Navigate to='/LOGIN' />
    }
}

export default ProtectedRoutes
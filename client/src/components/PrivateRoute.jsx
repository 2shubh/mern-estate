    import React from 'react'
    import { useSelector } from 'react-redux'
    import { user } from '../../../server/controllers/userController'
    import { Navigate, Outlet } from 'react-router-dom'

    export const PrivateRoute = () => {
        const {currentUser}=useSelector(state => state.user);

    return  currentUser ? <Outlet/> : <Navigate to='/signin'/>
    }

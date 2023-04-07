import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


interface ProtectedRouteProps{
    isAuth: boolean | any;
    children: JSX.Element;
}

const ProtectedRoute = ({isAuth, children}:ProtectedRouteProps)=>{
    return isAuth !== null ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;
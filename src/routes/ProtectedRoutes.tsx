import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { loginCheck } from '../services/auth/AuthProvider';



const ProtectedRoutes = ()=>{
    const location = useLocation();
    let token: any = localStorage.getItem('token');
   
    return token !== null ? <Outlet/> : <Navigate to="/login" replace state={{from: location}}/>
}


export default ProtectedRoutes;
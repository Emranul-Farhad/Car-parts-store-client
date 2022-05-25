import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Fire key/Firekey';





const Require = ({children}) => {


    const [user , loading] = useAuthState(auth)
    const location = useLocation()
    
    if(loading){
        return <p>loading....</p>
    }
    
    
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    
        return (
            children
        );

  
};

export default Require;
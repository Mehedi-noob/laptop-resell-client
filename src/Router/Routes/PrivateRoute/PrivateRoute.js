import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import LoaderComponent from '../../../Shared/LoaderComponent/LoaderComponent';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    if(loading){
        return <LoaderComponent></LoaderComponent>
    }

    if (user){
        
        return children;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
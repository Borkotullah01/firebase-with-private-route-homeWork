import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    console.log(user);
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-bars w-24"></span>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

};

export default PrivateRoute;
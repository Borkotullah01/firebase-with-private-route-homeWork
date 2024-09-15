import { Result } from 'postcss';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/FirebaseProvider';

const SocialLogin = () => {

    const {
        googleLogin,
        facebookLogin,
        githubLogin,
        twitterLogin
    } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate("")
    const target = location?.state || "/";

    const socialLogin = (loginFunction) => {
        loginFunction()
        .then(result=>{
            navigate(target);
            console.log(result.user)
        })
        .catch(error=>console.log(error.code))
    }

    return (
        <div className='flex gap-2'>
            <Link onClick={()=>socialLogin(googleLogin)} className='btn btn-primary'>Google</Link>
            <Link onClick={()=>socialLogin(githubLogin)} className='btn btn-primary'>GitHub</Link>
            <Link onClick={()=>socialLogin(facebookLogin)} className='btn btn-primary'>Facebook</Link>
            <Link onClick={()=>socialLogin(twitterLogin)} className='btn btn-primary'>Twitter</Link>
        </div>
    );
};

export default SocialLogin;
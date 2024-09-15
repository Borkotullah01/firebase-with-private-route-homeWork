import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/FirebaseProvider';
import { useForm } from 'react-hook-form';
import SocialLogin from './SocialLogin';
import ForgotPassword from './ForgotPassword';

const Login = () => {

    const {logIn} = useContext(AuthContext)
    const navigate = useNavigate("")
    const location = useLocation();
    const target = location?.state || "/"
    

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const {email, password} = data;
        logIn(email, password)
        .then(result=>{
            navigate(target)
            console.log(result.user)
        })
        .catch(error=>console.log(error.code))
      }

    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" {...register("email", {required: true})}/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" {...register("password", {required: true})}/>
              <ForgotPassword></ForgotPassword>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className='text-green-600'>Don't have account <Link className='btn-link' to="/register">Register</Link></p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;
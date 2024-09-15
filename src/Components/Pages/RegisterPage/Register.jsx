import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/FirebaseProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate(null)
    

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        const { name, image, email, password } = data;
        createUser(email, password)
        .then(result=>{
            updateUserProfile(name, image)
            .then(()=>{
                console.log(result.user)
                navigate("/")
                location.reload()
            })
            .catch(error=>console.log(error.code))
        })
        .catch(error=>console.log(error.code))
      }
    
    

    return (
    <div className="hero bg-base-200 min-h-[calc(100vh-72px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" {...register("name",{required: true})} className="input input-bordered" />
                {/* errors will return when field validation fails  */}
                {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Image URL</span>
                </label>
                <input type="text" placeholder="Image url" {...register("image",{required: true})} className="input input-bordered" />
                {/* errors will return when field validation fails  */}
                {errors.image && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" {...register("email",{required: true})} className="input input-bordered" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" {...register("password",{required: true})} className="input input-bordered" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
                <p className='text-green-600'>Already have an account <Link className='btn-link' to="/login">Login</Link></p>
            </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
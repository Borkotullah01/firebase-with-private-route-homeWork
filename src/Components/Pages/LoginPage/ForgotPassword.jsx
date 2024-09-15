import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Provider/FirebaseProvider';

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const { forgotPassword } = useContext(AuthContext)

    const handleForgotPassword = (e) => {
        e.preventDefault()
        forgotPassword(email)
        .then(()=>console.log("Password reset email sent"))
        .catch(error=>console.log(error.code))

    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <label className="label">
                <a className="label-text-alt link link-hover" onClick={()=>document.getElementById('my_modal_2').showModal()}>Forgot password?</a>
              </label>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Enter your email</h3>
                <input onChange={(e)=>setEmail(e.target.value)} className="input input-bordered" placeholder='email' type="email" required /> <button onClick={handleForgotPassword} className='btn btn-info text-white'>Send</button>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
        </div>
    );
};

export default ForgotPassword;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Register = () => {
    //receive authInfo form AuthProvider and destructuring
    const {signUp,updateUser} = useContext(AuthContext);

    //state to show error message
    const [error, setError] = useState('');

    //handle form submit by register button click
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name,photoUrl,email, password, confirmPassword);
        signUp(email,password)
        .then(result => {
            //add name and photo url to firebase
            updateUser(name,photoUrl)
            .then(() => console.log('profile updated'))
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-bold">Please <span className='text-[#E6272C]'> Register </span> Here!</h1>
                    </div>
                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Enter Your Picture" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirmPassword' placeholder="Enter Your Password Again" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-red-600 hover:bg-red-500 border-none">Register</button>
                            </div>
                            <label className='label'>
                                <span><small>Already Have an Account? <Link className='link link-error' to='/login'>Login Here</Link></small></span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
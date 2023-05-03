import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    //receive authInfo form AuthProvider and destructuring
    const { signIn } = useContext(AuthContext);
    
    //handle form submit by login button click
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //sign in user
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log('loggin user', loggedUser);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login <span className='text-[#E6272C]'> Here!</span></h1>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-96">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-red-600 hover:bg-red-500 border-none">Login</button>
                        </div>
                        <p><small>Don't Have an Account? <Link className='link link-error' to='/register'>Create Account</Link></small></p>
                        <h2 className=' text-center d-inline'><hr />OR <hr /></h2>
                        <div className="form-control mt-2">

                            <button className="btn btn-outline btn-primary"><FcGoogle className='text-xl me-2' />Continue With Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-outline"><FaGithub className='text-xl me-2' />Continue With Github</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
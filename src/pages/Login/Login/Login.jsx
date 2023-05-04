import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    //receive authInfo form AuthProvider and destructuring
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    //handle form submit by login button click
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //sign in user
        signIn(email, password)
            .then(() => {
                redirect();
            })
            .catch((err) => {
                console.log(err.code);
                if (err.code === 'auth/wrong-password') {
                    setError('Email or Password do not match')
                }
                if(err.code === 'auth/user-not-found'){
                    setError('User not found !!!')
                }
            })
    }

    //handle google login 
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                redirect();
            })
            .catch(err => console.log(err))
    }

    // github login handle 
    const handleGithubLogin = () => {
        signInWithGithub()
            .then(() => {
                redirect();
            })
            .catch(err => console.log(err))
    }

    // after login go to homepage or redirect to other page 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.location?.pathname || '/';
    const redirect = () => {
        navigate(from, { replace: true });
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-bold">Login <span className='text-[#E6272C]'> Here!</span></h1>
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body w-96">
                        <form onSubmit={handleLogin} >
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
                            <div className="form-control ms-2 my-2">
                                <p className='text-sm text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn bg-red-600 hover:bg-red-500 border-none">Login</button>
                            </div>
                            <p><small>Don't Have an Account? <Link className='link link-error' to='/register'>Create Account</Link></small></p>
                            <h2 className=' text-center d-inline'><hr />OR <hr /></h2>

                        </form>
                        <div className="form-control mt-2">

                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary"><FcGoogle className='text-xl me-2' />Continue With Google</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGithubLogin} className="btn btn-outline"><FaGithub className='text-xl me-2' />Continue With Github</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
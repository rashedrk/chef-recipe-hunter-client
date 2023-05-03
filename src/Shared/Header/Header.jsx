import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);

    //handle logout button click
    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log('success full logout');
        })
        .catch(err => console.log(err))
    }
    {
        console.log(user?.photoURL);
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About Us</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Dish<span className='text-[#E6272C]'> Discoveries</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>About Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                                <div className="btn btn-ghost btn-circle avatar ">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                    
                                </div>
                            </div>
                            <button onClick={handleLogOut} className='ms-3 btn btn-outline btn-secondary btn-sm'>Log Out</button>
                        </>
                        :
                        <>
                            <Link className="btn btn-outline btn-secondary btn-sm" to='/login'>Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;
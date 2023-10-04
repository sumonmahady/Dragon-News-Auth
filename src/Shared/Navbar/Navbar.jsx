import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../../assets/user.png'
import { authContext } from '../../Provider/Provider';

const Navbar = () => {
    const {user,logOut} = useContext(authContext)

    const handleSingOut = () =>{
        logOut()
        .then()
        .catch()
    }

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                            {
                                navlink
                            }
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navlink
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                  

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-full rounded-full ">
                            <img src={img} />
                        </div>
                    </label>
                    {
                        user ? <button onClick={handleSingOut} className='btn ml-3'>Sing Out</button>
                        :
                        <Link to='/login'><button className='btn ml-3'>Login</button></Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;
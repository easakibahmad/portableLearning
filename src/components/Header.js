import React from 'react';
import { Link } from 'react-router-dom';
import navlogo from '../assets/nav-logo.jpg';
import { CgDarkMode } from 'react-icons/cg';


const Navbar = () => {
    return (
            <div className="navbar bg-gray-400">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-gray-400 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><Link>Home</Link></li>
                        <li><Link>Courses</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>FAQ</Link></li>

                    </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                     <img className='h-8 w-8 mr-2 rounded-full' src={navlogo} alt="" />
                     PORTABLE LEARNING</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="bg-gray-400 menu menu-horizontal p-0">

                    <li><Link>Home</Link></li>
                    <li><Link>Courses</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>FAQ</Link></li>

                    </ul>
                </div>
                <div className="navbar-end flex mr-4 align-center">
                    <Link className='hover:bg-zinc-500 hover:text-white p-3 rounded-md'>Login</Link>
                    <div className='ml-4'><Link><CgDarkMode></CgDarkMode></Link></div>
                </div>
            </div>
    );
};

export default Navbar;
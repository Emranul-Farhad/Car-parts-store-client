import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../Fire key/Firekey';
import {signOut } from 'firebase/auth';



const Nav = () => {

    // pathname handel for hide and visible for login sign up pages
    const { pathname } = useLocation()

    // user logou handel
    const [user] = useAuthState(auth)
    // logout function
    const logout = () => {
        signOut(auth);
      };

    const navlinks = <>
        <li> <NavLink className="text-white font-bold" to='/'> Home</NavLink> </li>
        <li> <NavLink className="text-white font-bold" to='/appoinment'> Products </NavLink> </li>
        <li> <NavLink className="text-white font-bold" to='/blogs' > Blogs </NavLink> </li>
        <li> <NavLink className="text-white font-bold" to='/Contact us' > Contact us </NavLink></li>
        <li> <NavLink className="text-white font-bold mr-1" to='/dashboard' > Dashboard </NavLink></li>
        { user ?   <button onClick={logout} className="btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"> LOG OUT </button>:
            <li><NavLink className="text-white font-bold" to='/login'> login </NavLink></li>}
    </>


    return (
        <div>
            <div style={
                pathname.includes('/login') ? { display: "none" } : { display: "block" } &&
                    pathname.includes('/signup') ? { display: "none" } : { display: "block" }
            } >
                <div className="navbar bg-[#232634]  fixed top-0 z-20 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabindex="0" className="btn btn-primary lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#232634] rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        {/* nav bar logo */}
                        <img className='mx-20 md:mx-0 lg:mx-0 '  src="http://apar.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2020/06/APAR-White-1.png" alt="" />
                        {/* nav bar logo */}

                    </div>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal p-0 bg-base-500 ">
                            {navlinks}
                        </ul>
                    </div>

                    <div className='navbar-end lg:hidden'>
                        <label for="dashboard" tabindex="1" className="btn btn-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
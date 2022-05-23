import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';




const Nav = () => {

    const {pathname} = useLocation()

    const navlinks = <>
    <li> <NavLink className="text-white font-bold" to='/'> Home</NavLink> </li>
    <li> <NavLink className="text-white font-bold" to='/appoinment'> Products </NavLink> </li>
    <li> <NavLink className="text-white font-bold" to='/blogs' > Blogs </NavLink> </li>
    <li> <NavLink className="text-white font-bold" to='/Contact us' > Contact us </NavLink></li>
    <li> <NavLink className="text-white font-bold mr-1" to='/dashboard' > Dashboard </NavLink></li>
    <li><NavLink className="text-white font-bold" to='/login'> login </NavLink></li>
</>

// style={ pathname.includes('/login') || ('/signup') ? {display : "none"} : {display : "block" }

// }
    return (
        <div>
            <div style={
             pathname.includes('/login') ?{display : "none"}  : {display: "block"} &&
             pathname.includes('/signup')? {display: "none"} : {display : "block"}           
            } >
            <div class="navbar bg-[#232634]  fixed top-0 z-20 ">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    {/* nav bar logo */}
                    <img  src="http://apar.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2020/06/APAR-White-1.png" alt="" />
                    {/* nav bar logo */}

                </div>
                <div class=" hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 bg-base-500 ">
                        {navlinks}
                    </ul>
                </div>

                <div className='navbar-end lg:hidden'>
                <label for="dashboard" tabindex="1" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>               
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Nav;
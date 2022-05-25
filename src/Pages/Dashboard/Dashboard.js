import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';




const Dashboard = () => {

    return (
        <div className='mt-[85px]'>
            <div class="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">

                {/* Nested ROUTE HANDEL*/}
                <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-[200px] bg-[#232634] text-base-content">

                        <li><NavLink className="text-white uppercase font-bold" to='/dashboard/users'> All USERS </NavLink> </li>
                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/myorders'>
                             My Orders </NavLink> </li>
                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/profile'> My Profile </NavLink> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
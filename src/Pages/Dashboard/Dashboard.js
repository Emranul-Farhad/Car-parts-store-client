import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Components/DashboardComponents/Admin/useAdmin';
import auth from '../../Components/Fire key/Firekey';




const Dashboard = () => {

    const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)


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

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/users'> All USERS </NavLink> </li>}

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/manage'> man.Products </NavLink> </li>}

                        { admin && <li><NavLink className="text-white uppercase font-bold" to='/dashboard/addproducts'> addproducts </NavLink> </li>}

                          <li><NavLink className="text-white font-bold uppercase" to='/dashboard/myorders'>
                       My Orders </NavLink> </li>

                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/profile'> My Profile </NavLink> </li>

                        <li><NavLink className="text-white font-bold uppercase" to='/dashboard/addreview'> Add a review </NavLink> </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
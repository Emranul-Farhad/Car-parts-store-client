import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';



const Myorders = () => {

  


    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    // state handel
    const navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        console.log(email);
        if (email) {
            const url = (`https://thawing-beach-36415.herokuapp.com/orders?email=${email}`)
            console.log(url);
            fetch(url, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accesstoken")}`
                }
            })
                .then(res => {
                    console.log(res, "res check");
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        navigate('/login')
                        localStorage.removeItem("accesstoken")
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'unauthorized access',

                        })
                    }
                    return res.json()
                })

                .then(data => setOrders(data))

        }
    }, [user, navigate])




    const deletorder = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `https://thawing-beach-36415.herokuapp.com/orderpro/${id}`
                console.log(url, "delet");
                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'deleted done',
                                text: ` deleted products ${id}`
                            })

                        }  
                        const deleted = orders.filter(delet => delet._id !== id )
                        setOrders(deleted)
                        console.log(data)
                    })

            }
        })

    }



    console.log(orders);

    return (
        <div className='mt-10'>

            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header"> Your Total orders is {orders.length}
                            <div class="btn-actions-pane-right">
                                <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Email</button>
                                    <button class="btn btn-focus"> Your Products</button>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th>Email</th>
                                        <th class="text-center">products Name</th>
                                        <th class="text-center">order cancel</th>
                                        <th class="text-center">Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.length > 0 &&
                                        orders?.map((order, index) =>

                                            <>

                                                <tr>
                                                    <td class="text-center text-muted">{index + 1} </td>
                                                    <td>
                                                        <div class="widget-content p-0">
                                                            <div class="widget-content-wrapper">
                                                                <div class="widget-content-left mr-3">

                                                                </div>
                                                                <div class="widget-content-left flex2">
                                                                    <div class="widget-heading">
                                                                        {order?.email}  </div>
                                                                    <div class="widget-subheading opacity-7">  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center"> {order?.productname} </td>
                                                    <td class="text-center">

                                                       <button onClick={()=> deletorder(order?._id) } className='btn btn-primary btn-sm'> Cancel</button>
                                         
                                                    </td>


                                                    <td class="text-center">
                                                        <NavLink to={`/dashboard/payment/${order?._id}`} className="btn btn-primary btn-sm" >pay</NavLink>
                                         
                                                    </td>
                                                    
                                                </tr>

                                            </>

                                        )
                                    }



                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Myorders;






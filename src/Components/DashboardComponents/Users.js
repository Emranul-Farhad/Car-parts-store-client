import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';
import Loading from '../Loading/Loading';


const Users = () => {


    //   user name 
    const [user] = useAuthState(auth)
    const display = user?.displayName
    console.log(display);

    //    users get api get all useer from databse
    //    const [users , SetUsers] = useState([])

    //     useEffect(()=> {
    //         fetch("https://thawing-beach-36415.herokuapp.com/users" )
    //         .then(res => res.json())
    //         .then(data => SetUsers(data))
    //     },[])


    const { data: usera, isLoading, refetch } = useQuery('users', () =>
        fetch('https://thawing-beach-36415.herokuapp.com/users').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // make admin
    const makeadmin = (email) => {
        const url = `https://thawing-beach-36415.herokuapp.com/users/admin/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'authorization': `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'you cannot make admin',

                    })
                }
                return res.json()
            })
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: `successfully make admin ${email}`,

                    })
                    refetch()
                }
                console.log(data)
            })

        console.log(url);
    }


    return (
        <div>

            <div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="main-card mb-3 card">
                            <div class="card-header"> total Active Users is { }
                                <div class="btn-actions-pane-right">
                                    <div role="group" class="btn-group-sm btn-group">
                                        <button class="active btn btn-focus">ACTIVE USERS</button>
                                        <button class="btn btn-focus">ACTIVE USERS</button>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center">#</th>
                                            <th>Email</th>

                                            <th class="text-center">Status</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            usera.map((usera, index) =>

                                                <>

                                                    <tr>
                                                        <td class="text-center text-muted">{index + 1} </td>
                                                        <td>
                                                            <div class="widget-content p-0">
                                                                <div class="widget-content-wrapper">
                                                                    <div class="widget-content-left mr-3">
                                                                        {/* <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt=""/>
                                                                </div> */}
                                                                    </div>
                                                                    <div class="widget-content-left flex2">
                                                                        <div class="widget-heading">
                                                                            {usera?.email}
                                                                        </div>
                                                                        <div class="widget-subheading opacity-7">  </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        {/* <td class="text-center"> {usera?.email} </td> */}

                                                        <td class="text-center">
                                                            {usera?.role === "admin" ? <p>Already Admin</p> : <button onClick={() => makeadmin(usera?.email)} type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Make Admin </button>}
                                                        </td>
                                                    </tr>

                                                </>

                                            )
                                        }



                                    </tbody>
                                </table>
                            </div>
                            <div class="d-block text-center card-footer">
                                <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                                <button class="btn-wide btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Users;
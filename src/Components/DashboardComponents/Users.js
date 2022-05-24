import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Fire key/Firekey';


const Users = () => {


//   user name 
   const [user] = useAuthState(auth)
   const display = user?.displayName
  console.log(display);

//    users get api
   const [users , SetUsers] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8000/users" )
        .then(res => res.json())
        .then(data => SetUsers(data))
    },[])



    return (
        <div>
           <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magni fugiat earum libero voluptatibus cupiditate dolores maxime necessitatibus deleniti, cumque nisi illo vel natus! Voluptas vero, maxime porro sed tempora aspernatur a nisi eligendi dolore quia asperiores esse aliquid ipsa nesciunt facilis sint aut sit officiis deserunt impedit, blanditiis doloremque.</p> 
           <div>
               
           <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-header">Active Users
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
                                                <th>Name</th>
                                                <th class="text-center">Email</th>
                                                <th class="text-center">Status</th>
                                               
                                            </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    users.map((usera, index ) =>  
                                                        
                                                        <>
                                                        
                                                        <tr>
                                                <td class="text-center text-muted">{index+1} </td>
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
                                                                    {user?.displayName}  </div>
                                                                <div class="widget-subheading opacity-7">  </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center"> {usera?.email} </td>
                                               
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr> 
                                                        
                                                        </>
                                                        
                                                        )
                                                }

                                            {/* <tr>
                                                <td class="text-center text-muted">#345</td>
                                                <td>
                                                    <div class="widget-content p-0">
                                                        <div class="widget-content-wrapper">
                                                            <div class="widget-content-left mr-3">
                                                                <div class="widget-content-left">
                                                                    <img width="40" class="rounded-circle" src="assets/images/avatars/4.jpg" alt=""/>
                                                                </div>
                                                            </div>
                                                            <div class="widget-content-left flex2">
                                                                <div class="widget-heading">John Doe</div>
                                                                <div class="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center">Madrid</td>
                                                <td class="text-center">
                                                    <div class="badge badge-warning">Pending</div>
                                                </td>
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
                                                </td>
                                            </tr> */}
                                            
                                            
                                            
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
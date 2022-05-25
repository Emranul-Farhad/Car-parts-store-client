import React, { useEffect, useState } from 'react';



const Myorders = () => {

  const [orders ,setOrders] = useState({})
  useEffect(() => {
      fetch("http://localhost:8000/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
  },[])

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
                                                <th>Name</th>
                                                <th class="text-center">Email</th>
                                                <th class="text-center">Status</th>
                                               
                                            </tr>
                                            </thead>
                                            <tbody>

                                                { orders.length > 0 &&
                                                    orders?.map((order, index ) =>  
                                                        
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
                                                                    {order?.email}  </div>
                                                                <div class="widget-subheading opacity-7">  </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-center"> {order?.productname} </td>
                                               
                                                <td class="text-center">
                                                    <button type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Details</button>
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
    );
};

export default Myorders;
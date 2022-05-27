import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Loading/Loading';




const Manageorders = () => {

    const { data: orders, isLoading } = useQuery('orders', () =>
        fetch('https://thawing-beach-36415.herokuapp.com/allorders').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header"> Your Total orders is {orders.length}
                            <div class="btn-actions-pane-right">
                                <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Email</button>
                                    <button class="btn btn-focus"> Your orders</button>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-bproductless table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="text-center">#</th>
                                        <th>Name</th>
                                        <th class="text-center">Email</th>
                                        <th class="text-center">Status</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.length > 0 &&
                                        orders?.slice(0).reverse().map((product, index) =>

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
                                                                        {product?.email}  </div>
                                                                    <div class="widget-subheading opacity-7">  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center"> {product?.productname} </td>

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

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Manageorders;
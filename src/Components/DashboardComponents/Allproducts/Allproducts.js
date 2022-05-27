import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Loading/Loading';




const Allproducts = () => {

    const { data: products, isLoading, refetch } = useQuery('products', () =>
        fetch('http://localhost:8000/products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    //   deleting handel
    //    const delet = (id) => {
    //        const delet = Swal.fire({
    //         icon: 'question',
    //         title: 'are you sure ?',
    //         text: '',
    //     })
    //        if(delet){
    //         const url = `http://localhost:8000/products/${id}`
    //         console.log(url);
    //         fetch(url,{
    //             method : "DELETE"
    //         })
    //         .then(res=> res.json())
    //         .then(data => {
    //             if(data.deletedCount > 0 ){
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'deleted done',
    //                     text: ` deleted products ${id}` 
    //                 })

    //             }
    //             refetch()

    //             console.log(data)
    //         })
    //        }


    //    }

    const delet = id => {

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

                const url = `http://localhost:8000/products/${id}`
                console.log(url);
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
                        refetch()

                        console.log(data)
                    })

            }
        })

    }
    return (
        <div>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-card mb-3 card">
                        <div class="card-header"> Your Total products is {products.length}
                            <div class="btn-actions-pane-right">
                                <div role="group" class="btn-group-sm btn-group">
                                    <button class="active btn btn-focus">Email</button>
                                    <button class="btn btn-focus"> Your products</button>
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

                                    {products.length > 0 &&
                                        products?.map((product, index) =>

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
                                                                        {product?.pname}  </div>
                                                                    <div class="widget-subheading opacity-7">  </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="text-center"> {product?.price} </td>
                                                    <td class="text-center"> {product?._id} </td>

                                                    <td class="text-center">
                                                        <button
                                                            onClick={() => delet(product?._id)} type="button" id="PopoverCustomT-1" class="btn btn-primary btn-sm">Delet</button>
                                                    </td>
                                                </tr>

                                            </>

                                        )
                                    }



                                </tbody>
                            </table>
                        </div>
                        {/* <div class="d-block text-center card-footer">
                            <button class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>
                            <button class="btn-wide btn btn-success">Save</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allproducts;
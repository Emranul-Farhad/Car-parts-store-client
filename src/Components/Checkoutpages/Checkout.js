import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';
import Loading from '../Loading/Loading';





const Checkout = () => {

    // state change
    const [quantity, setQuantity] = useState(0)
    console.log(quantity)

    const { id } = useParams()

    // user handel 
    const [user] = useAuthState(auth)
    // react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //  


    const { data: idwiseproduct, isLoading, refetch } = useQuery([id, 'products'], () =>
        fetch(`http://localhost:8000/products/${id}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(quantity, idwiseproduct.price)


    //   submit handel
    const submit = (event) => {
        event.preventDefault();
        const details = {
            email: event.target.email.value,
            productname: event.target.productname.value,
            order: event.target.order.value,
            totalprice: event.target.totalprice.value
        }
        console.log(event.target, event.target);

        fetch("http://localhost:8000/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Products add done',

                    })
                    refetch()
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Try again',

                    })
                    refetch()
                }

            })
    }

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
                <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
                <div className="card-body basis-2/3">
                    <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2>
                    <p className='text-left'> {idwiseproduct.description} </p>
                    <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#FC5A34]'> price: $ {idwiseproduct.price} </p>
                    <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#E81938]'> minimumQuantity : {idwiseproduct.minimumQuantity} </p>
                    <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#6e1825]'> in Stock : {idwiseproduct.qunatity
                    } </p>

                    <form onSubmit={submit} >
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='email'
                            required
                        />
                        <input
                            type="text"
                            placeholder="Type your products name"
                            readOnly
                            value={idwiseproduct?.pname}
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='productname'

                        />
                        <input
                            required
                            type="number"
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Type your products quantity"
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            min={idwiseproduct?.minimumQuantity}
                            name='order'

                        />
                        <input
                            type="totalprice"
                            value={+quantity * +idwiseproduct.price}
                            placeholder="price"
                            className="mt-3 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            name='totalprice'
                            required
                        />
                        {console.log(+quantity * +idwiseproduct.price)}
                        <input
                            className='w-40 mt-4 className="w-full flex justify-center bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"'
                            type="submit" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Checkout;





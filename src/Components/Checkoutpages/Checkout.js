// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../Fire key/Firekey';
import CheckoutForm from './CheckoutForm';



const Checkout = () => {

    // stripe handel

    // const stripePromise = loadStripe('pk_test_51L0m3KERq3LthqiVFvM6lkFuVIavOgGXrNiXcMVgF54GvaxlJmxJzEZlQV7mwhYdB8w7lhNKvC663wJYpyGem9K600ZD6Tsfvi');

    // user taking
    const [user] = useAuthState(auth)

    // rreact hook
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    //   use parmas for getting id from path
    const { id } = useParams()

    //   use satate
    const [idwiseproduct, setIdwiseproduct] = useState({})

    useEffect(() => {

        fetch(`http://localhost:8000/products/${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setIdwiseproduct(data))
    }, [id])


    // submit button
    const onSubmit = data => {
        fetch("http://localhost:8000/orders", {
            method: 'POST', 
            headers: {                    
                'Content-Type': 'application/json' ,            
            },
            body: JSON.stringify({email : data.email , productname: data.productname}),
        })
        .then(res=> res.json())
        .then(data => console.log(data), "get from here")
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
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            {/* input field for user order that 
            we will send in db */}

            <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
                <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
                <div className="card-body basis-2/3">
                    <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            className=" mt-2 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                           <input
                            type="text"
                            placeholder="Type your name"
                            readOnly
                           value={idwiseproduct.pname}
                            className="mt-2 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("productname", {
                                required: {
                                    value: true,
                                    message: "name required"
                                },

                            })}
                        />
                           <input
                            type="text"
                            placeholder="Type your name"
                            className="mt-2 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                           <input
                            type="text"
                            placeholder="Type your name"
                            className="mt-3 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                                        className='w-40 mt-4 className="w-full flex justify-center bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"'
                                        type="submit" />
                    </form>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default Checkout;
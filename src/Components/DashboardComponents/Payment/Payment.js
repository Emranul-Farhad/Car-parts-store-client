import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../Fire key/Firekey';
import Loading from '../../Loading/Loading';
import CheckoutForm from '../Checkoutpage/CheckoutForm';



const Payment = () => {

    // stripe pk key
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    // user handel
    const [user] = useAuthState(auth)
    // params handel
    const { id } = useParams()

    // usequery
    const { data: products, isLoading } = useQuery([id, 'payment'], () =>
        fetch(`http://localhost:8000/payment/${id}`, {
            "method": "GET",
        })
            .then(res =>
                res.json()
            )
    )
    console.log(products);

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>

            <div className='flex justify-center my-20'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">welcome <span className='text-[#EF2D37] font-extrabold'> {user?.displayName} </span>!!</h2>
                        <p className='font-bold text-left'> Your orderd products is <br />
                            <span className='text-[#EF2D37] font-extrabold text-2xl'>  {products?.productname}  </span> </p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-20'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">

                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;



import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, { useState } from 'react';






const CheckoutForm = () => {


    // error handel hook
     const [carderror , setCarderror] = useState("")

    // stripe functionality
    const stripe = useStripe();
    const elements = useElements();




    // handel submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            console.log('cannot get');
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card', 
            card
          });
          
          
          setCarderror(error?.message || "")
          console.log(paymentMethod);
    }


    // retuen handel 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-4 mr-[250px] btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 border-0' type="submit" disabled={!stripe}>
                    Pay
                </button>
                
            </form>
        </div>
    );
};

export default CheckoutForm;
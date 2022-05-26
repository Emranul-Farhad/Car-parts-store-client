import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';




// here catch your products price

const CheckoutForm = () => {


    // error handel hook
     const [carderror , setCarderror] = useState("")
    //  client secret hook
    const [clientSecret, setClientSecret] = useState("");

    // stripe functionality
    const stripe = useStripe();
    const elements = useElements();


    // sendd money in stripe
    useEffect(() => {
        fetch('http://localhost:8000/create-payment-intent', {
          method: "POST",
          headers: { 
              "Content-Type": "application/json" 
            },
            // body: JSON.stringify ({}),your sitruc payment
        })
          .then((res) => res.json())
          .then(data => {  
              console.log(data); 
              if(data?.clientSecret){
                //   console.log(data?.clientSecret, "aaaa" ) ;
                  setClientSecret(data.clientSecret)
              }    
              else{
                  console.log("failed");
              }   
            });
      }, []);



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
                <button className='mt-4 mr-[250px] btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500 border-0' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>   
            </form>
            <p  className='text-red-600 font-bold mt-3' >  {carderror}  </p> 
        </div>
    );
};

export default CheckoutForm;



import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';
import Loading from '../Loading/Loading';





const Checkout = () => {

    const { id } = useParams()

    // user handel 
    const [user] = useAuthState(auth)
    // react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    //   use satate
    // const [idwiseproduct, setIdwiseproduct] = useState({})

    // useEffect(() => {

    //     fetch(`http://localhost:8000/products/${id}`, {
    //         method: "GET"
    //     })
    //         .then(res => res.json())
    //         .then(data => setIdwiseproduct(data))
    // }, [id])



    const { data: idwiseproduct, isLoading , refetch  } = useQuery([ id,'products'], () =>
    fetch(`http://localhost:8000/products/${id}`).then(res =>
      res.json()
    )
  )

  if(isLoading){
      return <Loading></Loading>
  }


//   submit handel
const onSubmit = data => {
    fetch("http://localhost:8000/orders", {
        method: 'POST', 
        headers: {                    
            'Content-Type': 'application/json' ,            
        },
        body: JSON.stringify({email : data.email , productname: data.productname}),
    })
    .then(res=> res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                icon: 'success',
                title: 'Products add done',
             
            })
            refetch()
        }
        console.log(data)})
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
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
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
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
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
                            className="mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
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
                            className="mt-3 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
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
               
            </div>
           
        </div>
        </div>
    );
};

export default Checkout;




// <div>
// <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
//     <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
//     <div className="card-body basis-2/3">
//         <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2>
//         <p className='text-left'> {idwiseproduct.description} </p>
//         <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#FC5A34]'> price: $ {idwiseproduct.price} </p>
//         <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#E81938]'> minimumQuantity : {idwiseproduct.minimumQuantity} </p>
//         <div className="card-actions justify-end">
//             <button className="btn btn-primary">Listen</button>
//         </div>
//     </div>
// </div>


{/* <div className='mt-[150px]'>
<div class="card container lg:card-side bg-base-100 shadow-xl">
    <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
    <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
            <button class="btn btn-primary">Listen</button>
        </div>
    </div>
</div>
</div> */}
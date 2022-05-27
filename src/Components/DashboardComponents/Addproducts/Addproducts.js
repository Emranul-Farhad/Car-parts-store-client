import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';




const Addproducts = () => {

    // react hook
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    //    handelo submit
    const onSubmit = data => {
        const addpeoductsdetails = {
            pname: data.pname,
            qunatity: data.qunatity,
            minimumQuantity: data.minimumQuantity,
            img: data.img,
            price: data.price,
            description: data.description
        }
        if (data.qunatity < 0 || data.minimumQuantity < 0 || data.price < 0) {
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'please remove minus number',

                })
            )
        }
        if (+data.qunatity < +data.minimumQuantity) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Check your quantity score',

            })
        }
        fetch("https://thawing-beach-36415.herokuapp.com/addproducts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addpeoductsdetails),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    return (
                        Swal.fire({
                            icon: 'success',
                            title: 'congrats..',
                            text: 'adding products successfully',


                        })
                    )
                }
                else {
                    return (
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Check your quantity score',

                        })
                    )
                }
                console.log(data)
            })
        console.log(data, addpeoductsdetails, "success get from here");
    }

    return (
        <div className='flex justify-center mt-10'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input
                            type="text"
                            placeholder='type your products name'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("pname", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />

                        <input
                            type="number"
                            placeholder='type your products price'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: "price required"
                                },

                            })}
                        />

                        <input
                            type="number"
                            required
                            placeholder='type your minimum qunatity'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("minimumQuantity", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />

                        <input
                            type="number"
                            placeholder='type your qunatity'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-900"
                            {...register("qunatity", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />

                        <input
                            type="text"
                            required
                            placeholder='give your img link'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />

                        <textarea {...register("description")} placeholder='descirbe your review' className='mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500' id="" cols="4" rows="4"></textarea>

                        <div class="card-actions justify-end">
                            {/* <b class="btn btn-primary">Buy Now</b> */}
                            <input type="submit" className='btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500' />
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Addproducts;
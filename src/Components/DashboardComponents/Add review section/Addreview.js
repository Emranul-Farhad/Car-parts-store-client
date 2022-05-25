import React from 'react';
import { useForm } from 'react-hook-form';



const Addreview = () => {
    // react hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // submit handel
    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className='flex justify-center mt-20'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input
                            type="text"
                            placeholder='type your name'
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
                            placeholder='type products name'
                            className=" mt-2 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <textarea placeholder='descirbe your review' className='mt-2 w-full text-base px-4 py-2 border-b border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500' name="problem" id="" cols="4" rows="4"></textarea>
                       
                        <div class="card-actions justify-end">
                        <input class="btn btn-primary" type="submit" />
                      
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Addreview;
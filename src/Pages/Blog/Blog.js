import React from 'react';
import './Blog.css'



const Blog = () => {


    return (
        // className='mx-auto container'
        <div className='mt-20' >
            {/* <div className='mt-[130px] mx-20 shadow-2xl flex flex-col lg:flex-row lg:w-[1000px] rounded-2xl  h-auto'>
                <div className='basis-2/2 shadow-lg rounded-2xl'>
                    <img src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg" alt="" />
                </div>
                <div className='basis-2/3 lg:mx-7  mt-5 '>
                   <p className='text-left mx-7'>The new STATUS Downhill/BMX helmet redefines the standards for what a mid-level full face helmet should be. The Status range has proved one of the most popular choices for Australian BMX racers, especially in the Youth sizes which have a dedicated smaller shell (compared to the Adult size helmets) to keep the weight down, yet with total full face protection. The Youth helmets come in at just under 1kg, which means that your young racer can maintain a level eyeline whilst riding/racing as they don't quite yet have the neck strength of an adul</p>
                </div>

            </div> */}
            {/* <div class="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
                <figure><img className='shrink-0' src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg" alt="Album" /></figure>
                <div class="card-body basis-2/3">
                    <h2 class="card-title">New album is released!</h2> 
                    <p>The new STATUS Downhill/BMX helmet redefines the standards for what a mid-level full face helmet should be. The Status range has proved one of the most popular choices for Australian BMX racers, especially in the Youth sizes which have a dedicated smaller shell (compared to the Adult size helmets) to keep the weight down, yet with total full face protection. The Youth helmets come in at just under 1kg, which means that your young racer can maintain a level eyeline whilst riding/racing as they don't quite yet have the neck strength of an adul</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}
            {/* test login form */}


            <div class="relative min-h-screen flex ">
                <div class="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div class="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative"

                        style={
                            {
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1579103769354-8796259d8d54?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)',
                            
                            }
                        }

                       


                    >

                        <div class="absolute bg-gradient-to-b  opacity-75 inset-0 z-0"></div>
                        <div class="w-full  max-w-md z-10">
                            <div class="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
                            <div class="sm:text-sm xl:text-md text-gray-200 font-normal"> What is Lorem Ipsum Lorem Ipsum is simply dummy
                                text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                                has?</div>
                        </div>

                        {/* <!---remove custom style--> */}
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    

                    <div class="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div class="max-w-md w-full space-y-8">
                            <div class="text-center">
                                <h2 class="mt-6 text-3xl font-bold text-gray-900">
                                    Welcom Back!
                                </h2>
                                <p class="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                            </div>

                            {/* hh */}
                            <div class="flex items-center justify-center space-x-2">
                                <span class="h-px w-16 bg-gray-200"></span>
                                <span class="text-gray-300 font-normal">or continue with</span>
                                <span class="h-px w-16 bg-gray-200"></span>
                            </div>
                            <form class="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" value="true" />
                                <div class="relative">
                                    <div class="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    </div>
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                    <input
                                        class=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                        type="" placeholder="mail@gmail.com" value="mail@gmail.com" />
                                </div>
                                <div class="mt-8 content-center">
                                    <label class="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Passworddddd
                                    </label>
                                    <input
                                        class="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="" placeholder="Enter your password" value="*****|" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                            class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <a href="#" class="text-indigo-400 hover:text-blue-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                        Sign in
                                    </button>
                                </div>
                                <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Don't have an account?</span>
                                    <a href="#"
                                        class="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                        up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
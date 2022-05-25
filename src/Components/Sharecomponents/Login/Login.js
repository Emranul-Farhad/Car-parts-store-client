import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import auth from '../../Fire key/Firekey';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../Token/useToken';



const Login = () => {

    // react hook form
    const { register, formState: { errors }, handleSubmit } = useForm();

    // handel login with eamil passwords
    const [
        signInWithEmailAndPassword,
        loginuser,
        loading,
        sigininerror,
      ] = useSignInWithEmailAndPassword(auth);

    //  handel google login
    const [signInWithGoogle, googleloginuser, googleloading, googlerror] = useSignInWithGoogle(auth); 

    //handel submit 
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email , data.password)
        console.log(data)
        console.log(data.email , data.password );
    };

//  handel error for login
    let looginpageerros ;
    if(sigininerror || googlerror){
     looginpageerros  = <p> { googlerror?.message   || sigininerror?.message} </p>
    }


    


//  navigate handel
//  login user store 
const location = useLocation()
const navigate = useNavigate()
let from = location.state?.from?.pathname || "/";
     const [token] = useToken( loginuser || googleloginuser) 
    if(token){
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative"

                        style={
                            {
                                backgroundImage:
                                    'url(https://images.unsplash.com/photo-1579103769354-8796259d8d54?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870)',
                            }
                        }
                    >

                        <div className="absolute bg-gradient-to-b  opacity-75 inset-0 z-0"></div>
                        <div className="w-full  max-w-md z-10">
                            <div className="sm:text-4xl xl:text-5xl text-[#FC5A34] font-bold leading-tight mb-6">
                            APAR NEW USE AUTO PARTS.</div>
                            <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> We made all of Auto motive body parts Cars motorbike parts any kind of tire helmet mirror , spring soket jumper, engine ,Rim
                                has?</div>
                        </div>

                        {/* <!---remove custom style--> */}
                        <ul className="circles">
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


                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div className="max-w-md w-full space-y-8">
                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Welcom Back!
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">Please sign in to your account</p>
                            </div>
                            {/* dd */}
                            <div className="flex flex-row justify-center items-center space-x-3">


                                <button
                                onClick={() => signInWithGoogle()}
                                    className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-white shadow-lg cursor-pointer transition ease-in duration-300"
                                    rel="noreferrer"
                                >
                                    <FcGoogle></FcGoogle>

                                </button>

                            </div>

                            {/* hh */}
                            <div className="flex items-center justify-center space-x-2">
                                <span className="h-px w-16 bg-gray-200"></span>
                                <span className="text-gray-300 font-normal">or continue with</span>
                                <span className="h-px w-16 bg-gray-200"></span>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6"  >
                                {/* <input type="hidden" name="remember" placeholder='amder df' value="true" /> */}
                                <div className="relative">
                                    <div className="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    </div>
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>

                                    <input
                                        type="email"
                                        placeholder="Type your Email"
                                        className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email required"
                                            },
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'invalid Email'
                                            }
                                        })}
                                    />
                                    <label className="label absolute left-3 font-bold mt-0">
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                    </label>
                                </div>
                                <div className="mt-8 content-center">
                                    <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    {/* <input
                                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                        type="" placeholder="Enter your password** "  /> */}
                                    <input
                                        type="password"
                                        placeholder="Type your Password"
                                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Passwod required"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: 'eight characters one uppercase  lowercase letter one number one special character'
                                            }
                                        })}
                                    />
                                    <label className="label absolute font-bold mt-0">
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600  "> {errors.password.message} </span>}
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.password.message} </span>}
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center ">
                                        <p>{looginpageerros}</p>
                                    </div>
                                    
                                    <div className="text-sm">
                                        <a href="#" className="text-indigo-400 hover:text-blue-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        className='w-96 mx-2 className="w-full flex justify-center bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"'
                                        type="submit" />

                                </div>
                                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Don't have an account?</span>
                                    <NavLink to='/signup'
                                        className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                        up</NavLink>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
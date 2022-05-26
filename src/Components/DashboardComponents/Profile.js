import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Fire key/Firekey';
import './Profile.css'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Profile = () => {

    const [user] = useAuthState(auth)

    // hook form  handel
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // ?handel submit 
    const onSubmit = data => {
        const profile = {
            email: data.email,
            names: data.names,
            img : data.img,
            skillo: data.skillo,
            skillt : data.skillt,
            skill: data.skill,
            skillf: data.skillf,
            skillv: data.skillv,
            bio : data.bio

        }
        const url = "http://localhost:8000/profile"
        fetch(url, {
            method: 'POST', 
            headers: {                    
                'Content-Type': 'application/json' ,            
            },
            body: JSON.stringify(profile),
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    // http://localhost:8000/orders?email=${email}`
    
        const {data:profiles, isLoading } = useQuery('repoData', () =>
          fetch(`http://localhost:8000/profile?email=${user?.email}`).then(res =>
            res.json()
          )
        )
        if(isLoading){
            return <Loading></Loading>
        }



    return (
        <>
            <div className='flex justify-center'>
                <div class="cardprofile-container">
                    <span class="pro">ACTIVE</span>

                   { profiles?.img ? <img className='round' src={profiles?.img} alt="pic" /> : <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />}

                    {  profiles?.names ?  <h3 className='text-gray-500'>  {profiles?.names} </h3> :
                    <h3 className='text-gray-500'> {user?.displayName}  </h3>}
                    
                    <h6 className='text-gray-500'> {user?.email} </h6>
                    <p className='mt-3' alt={profiles?.bio?.slice(0, 50)  } > {profiles?.bio} </p>
                    <div class="buttons mt-3">
                        <button class="primary mx-1">
                            Message
                        </button>
                        <button class="primary ghost">
                            Following
                        </button>
                    </div>
                    <div class="skills">
                        <h6>Skills</h6>
                        <ul>
                            <li>UI / UX</li>
                            <li> {profiles?.bio} </li>
                            <li>{profiles?.skillo} </li>
                            <li> {profiles?.skillt} </li>
                            <li>{profiles?.skill} </li>
                            <li>{profiles?.skillf} </li>
                            <li> {profiles?.skillv} </li>
                        </ul>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">Card title!</h2>
                        
                        <form onSubmit={handleSubmit(onSubmit)} >
                        <input
                            type="text"
                            readOnly
                            value={user?.email}
                            placeholder='type your name'
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
                            placeholder='type your name'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("names", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='pste your imagelink'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: "image link required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='type skill'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("skillo", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='type skill'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("skillt", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='type skillh'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("skill", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='type skill'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("skillf", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <input
                            type="text"
                            placeholder='type skill'
                            className=" mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500"
                            {...register("skillv", {
                                required: {
                                    value: true,
                                    message: "Name required"
                                },

                            })}
                        />
                        <textarea {...register("bio")} placeholder='descirbe your review' className='mt-2 w-full text-base px-4 py-2 border border-[#E81938] focus:outline-none rounded-2xl focus:border-indigo-500' id="" cols="4" rows="4"></textarea>
                        {/* rating add */}                       

                        <div class="card-actions justify-end">
                            <input class="btn bg-gradient-to-r from-[#FC5A34] to-[#BB1D34]  hover:bg-gradient-to-l hover:from-[#FC5A34] hover:to-[#E81938]  text-gray-100  font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" type="submit" />

                        </div>
                    </form>
                       
                    </div>
                </div>
            </div>

        </>
    );


};

export default Profile;




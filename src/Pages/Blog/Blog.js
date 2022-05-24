import React from 'react';
import './Blog.css'



const Blog = () => {


    return (
        // className='mx-auto container'
        <div className='mt-20' >
            <div className='mt-[130px] mx-20 shadow-2xl flex flex-col lg:flex-row lg:w-[1000px] rounded-2xl  h-auto'>
                <div className='basis-2/2 shadow-lg rounded-2xl'>
                    <img src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg" alt="" />
                </div>
                <div className='basis-2/3 lg:mx-7  mt-5 '>
                   <p className='text-left mx-7'>The new STATUS Downhill/BMX helmet redefines the standards for what a mid-level full face helmet should be. The Status range has proved one of the most popular choices for Australian BMX racers, especially in the Youth sizes which have a dedicated smaller shell (compared to the Adult size helmets) to keep the weight down, yet with total full face protection. The Youth helmets come in at just under 1kg, which means that your young racer can maintain a level eyeline whilst riding/racing as they don't quite yet have the neck strength of an adul</p>
                </div>

            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
                <figure><img className='shrink-0' src="https://themebing.com/wp/sayara/wp-content/uploads/2020/05/cat-1.jpg" alt="Album" /></figure>
                <div className="card-body basis-2/3">
                    <h2 className="card-title">New album is released!</h2> 
                    <p>The new STATUS Downhill/BMX helmet redefines the standards for what a mid-level full face helmet should be. The Status range has proved one of the most popular choices for Australian BMX racers, especially in the Youth sizes which have a dedicated smaller shell (compared to the Adult size helmets) to keep the weight down, yet with total full face protection. The Youth helmets come in at just under 1kg, which means that your young racer can maintain a level eyeline whilst riding/racing as they don't quite yet have the neck strength of an adul</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> 
            {/* test login form */}


           

        </div>
    );
};

export default Blog;
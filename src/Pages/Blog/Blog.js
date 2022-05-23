import React from 'react';
import './Blog.css'



const Blog = () => {


    return (
        <div>
            <div className='mt-20 mx-20 shadow-2xl flex justify-start flex-col lg:flex-row '>
                <div className=''>
                    <img src="https://demo74leotheme.b-cdn.net/prestashop/leo_mtdanstore_demo/70-home_default/customizable-mug.jpg" alt="" />
                </div>
                <div className=''>
                    <h2>-6Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, fugit.</h2>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, fugit.</h2>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, fugit.</h2>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, fugit.</h2>
                </div>

            </div>
            <div class="card lg:card-side bg-base-100 shadow-xl container w-[70%]">
                <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';




const Offerbanner = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-2 md:gap-x-10 lg:gap-x-0 container mx-16'>
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/BANNER_1.png?v=1611831460" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Tire!</h2>
                    <p className='text-2xl opacity-100 font-bold text-white uppercase'> Minimum 5000 pices any kind of tire buy. GET 50% off </p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary mt-2">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full  ">
                <figure><img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/BANNER_2.png?v=1611831488" alt="ligth" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Gear metter!</h2>
                    <p className='text-2xl opacity-100 font-bold text-white uppercase'> MotorCycle Card Gear meeter 2000 Pices buy Get 20% OFF</p>
                    <div class="card-actions justify-end">
                        <button class="btn bg-[#E81938] ">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl image-full ">
                <figure><img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/BANNER_3.png?v=1611831543" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Tire Rim!</h2>
                    <p className='text-2xl opacity-100 font-bold text-white uppercase' >Per model 1000 pices buy . GEt 20% OFF</p>
                    <div class="card-actions justify-end">
                        <button class="btn bg-[#FD2F30] ">Buy Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Offerbanner;
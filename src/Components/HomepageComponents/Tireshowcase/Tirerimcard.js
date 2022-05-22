import React from 'react';



const Tirerimcard = ({tirerim}) => {

    return (
        <div>
            <div class="text-primary-content">
                    <div className='mt-5'>
                        <p> <span className='text-2xl font-extrabold text-[#FD2F30] text-left' >$</span> <span className='text-2xl font-extrabold text-[#FD2F30]'>{tirerim.price}</span> <span className='text-[#FD2F30]' > (1000 prices) </span> </p>
                        <img src={tirerim.img} alt="" />                   
                    </div>
                </div>
        </div>
    );
};

export default Tirerimcard;



{/* <div class="text-primary-content">
                    <div class="card-body bg-[#fc3434]">
                    <h2 class="card-title text-white"> {tirerim.pname} </h2>
                        <p> <span className='text-2xl font-extrabold text-white' >$</span> <span className='text-2xl font-extrabold text-white'>{tirerim.price}</span> <span>(1000 prices) </span> </p>
                        <img src={tirerim.img} alt="" />                   
                    </div>
                </div> */}
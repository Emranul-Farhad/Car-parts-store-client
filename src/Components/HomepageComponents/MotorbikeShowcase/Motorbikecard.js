import React from 'react';



const Motorbikecard = ({bike}) => {
    
    return (
        <div>
            <div class="text-primary-content">
                    <div class="card-body bg-[#fc3434]">
                    <h2 class="card-title text-white"> {bike.pname} </h2>
                        <p> <span className='text-2xl font-extrabold text-white' >$</span> <span className='text-2xl font-extrabold text-white'>{bike.price}</span> <span>(1000 prices) </span> </p>
                        <img src={bike.img} alt="" />                   
                    </div>
                </div>
        </div>
    );
};

export default Motorbikecard;
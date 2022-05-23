import React, { useEffect, useState } from 'react';
import Brandwiseshopscard from './Brandwiseshopscard';





const Brandwiseshops = () => {

    const [brands, setBrand] = useState([])

    useEffect(()=> {

        fetch('brand.json')
        .then(res => res.json())
        .then(data => setBrand(data))

    },[] )
    

    return (
        <div>
            <div>
                <h1 className='text-[#333333] text-[35px] font-serif font-bold'> CHOOSE PARTS BY BRAND </h1>
                <p className='text-[#E81938] font-extrabold'> WE MANUFECTURE ALL PARTS </p>
            </div>

           <div className=' mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-y-3 rounded-md'>
           {
                brands.map((brand , index ) => <Brandwiseshopscard key={index} brand={brand} ></Brandwiseshopscard> )
            }
            
           </div>
        </div>
    );
};

export default Brandwiseshops;
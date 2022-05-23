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
                <p> WE MANUFECTURE ALL PARTS </p>
            </div>

           <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2   '>
           {
                brands.map((brand , index ) => <Brandwiseshopscard key={index} brand={brand} ></Brandwiseshopscard> )
            }
            
           </div>
        </div>
    );
};

export default Brandwiseshops;
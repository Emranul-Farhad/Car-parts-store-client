import React, { useEffect, useState } from 'react';
import Productscard from './Productscard';




const Products = () => {

    const [products , setProducts] = useState([])

     useEffect(() =>{
         fetch("test.json")
         .then(res => res.json())
         .then(data => setProducts(data))
     },[] )

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2' >
                {
                    products.map((product , index ) => 
                        <Productscard product={product} key={index} ></Productscard>
                     )
                }
            </div>
        </div>
    );
};

export default Products;
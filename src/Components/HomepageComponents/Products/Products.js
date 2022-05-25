import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Productscard from './Productscard';




const Products = () => {

    const [allproducts, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // navigate handel
     const navigate = useNavigate()

     const products = allproducts.slice(0,3)
     console.log(products);

    return (
        <div>
            <div>
                <h1 className='text-[#333333] text-[35px] font-serif font-bold'> BUY   BEST   PRODUCTS  FROM   <br /> BEST MENUFACTURER </h1>
                <p className='text-[#E81938] font-extrabold'> APAR AUTOMOTIVE PARTS </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-20 mx-20 gap-y-5' >
                {
                    products.map((product, index) =>
                        <Productscard product={product} key={index} ></Productscard>
                    )
                }
            </div>
            <div>
                <button onClick={()=> navigate('/products')} className='mt-[100px]'>See more..</button>
            </div>
        </div>
    );
};

export default Products;
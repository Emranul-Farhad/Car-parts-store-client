import React, { useEffect, useState } from 'react';
import Allproductsshowcard from './Allproductsshowcard';




const Allproductsshow = () => {

    const [allproducts, setProducts] = useState([])

    useEffect(() => {
        fetch("https://thawing-beach-36415.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-20 mx-20 gap-y-5' >
            {
                allproducts.map(allproduct => <Allproductsshowcard key={allproduct._id} allproduct={allproduct} ></Allproductsshowcard>)
            }
        </div>
    );
};

export default Allproductsshow;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const Checkout = () => {

//   use parmas for getting id from path
  const {id} = useParams()

//   use satate
  const [idwiseproduct , setIdwiseproduct] = useState({})

  useEffect(()=> {
    
      fetch(`http://localhost:8000/products/${id}`,{
          method : "GET"
      })
      .then(res => res.json())
      .then(data => setIdwiseproduct(data))
    console.log(idwiseproduct.pname);
  },[id ] )



    return (
      <div>
           <div className="card lg:card-side bg-base-100 shadow-xl container w-[70%] mt-[150px]">
                <figure><img className='shrink-0' src={idwiseproduct.img} alt="Album" /></figure>
                <div className="card-body basis-2/3">
                    <h2 className="card-title text-extrabold text-2xl font-serif"> {idwiseproduct.pname} </h2> 
                    <p className='text-left'> {idwiseproduct.description} </p>
                    <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#FC5A34]'> price: $ {idwiseproduct.price} </p>
                    <p className='text-left font-extrabold font-serif text-2xl mt-2 text-[#E81938]'> minimumQuantity : {idwiseproduct.minimumQuantity} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> 
      </div>
    );
};

export default Checkout;
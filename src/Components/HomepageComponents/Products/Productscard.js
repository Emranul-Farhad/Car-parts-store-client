import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.card.css'


const Productscard = ({ product }) => {
    const { minimumQuantity, description, pname, img, price, _id } = product

  const navigate = useNavigate()

    return (
        <div>
            <section className="cardds-wrappers">
                <div className="cardd-grid-space mains">
                    <div className="cardd shadow-2xl "
                    style ={
                            {
                                backgroundImage: `url("${img}")`,
                                backgroundSize : "70%",
                                backgroundRepeat : "no-repeat"
                                
                            }
                        }
                    
                    >
                    
                      
                        <div>
                            <div>
                                <h1 className='text-[#E81938] font-extrabold' title={pname} > {pname.slice(0, 10) + ".."} </h1>
                            </div>
                            <p className='descriptionhover text-left font-bold'> {description.slice(0, 200)} </p>

                            <div className="date font-extrabold text-[#E81938] ">$ {price} </div>


                            <div className='flex justify-between mt-2'>
                                <div className="tags mt-2">
                                    <button onClick={()=> navigate (`/checkout/${_id}`) }  className="btn bg-[#E81938] mt-2">Buy Now</button>
                                </div>
                                <div className='mt-2'>
                               <p className='uppercase font-bold'> require pices {minimumQuantity} </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </section>
        </div>
    );
};

export default Productscard;
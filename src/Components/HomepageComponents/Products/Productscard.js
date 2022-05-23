import React from 'react';
import './Products.card.css'


const Productscard = ({ product }) => {
    const { minimumQuantity, description, pname, img , price} = product

    return (
        <div>
            <section class="cardds-wrappers">
                <div class="cardd-grid-space">
                    <a class="cardd" href="https://codetheweb.blog/2017/10/06/html-syntax/"
                        style={
                            {
                                backgroundImage: `url("${img}")`,
                            }
                        }
                    >
                        <div>
                           <div>
                           <h1 className='text-[#E81938] font-extrabold' title={pname} > {pname.slice(0,10)+ ".." } </h1>
                           </div>
                            <p className='descriptionhover text-left font-bold'> {description.slice(0,200)} </p>
                            <div class="date font-extrabold text-[#E81938] ">$ {price} </div>
                          <div>
                          <div class="tags">
                          <button class="btn bg-[#E81938] mt-2">Buy Now</button>
                            </div>
                          </div>
                        </div>
                    </a>
                </div>


            </section>
        </div>
    );
};

export default Productscard;
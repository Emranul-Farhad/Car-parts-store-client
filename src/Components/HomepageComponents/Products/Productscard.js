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
                            <h1 className='text-[#E81938] font-extrabold' > {pname} </h1>
                            <p className='descriptionhover'> {description.slice(0,200)} </p>
                            <div class="date font-extrabold text-[#E81938] ">$ {price} </div>
                            <div class="tags">
                                <div class="tag">HTML</div>
                            </div>
                        </div>
                    </a>
                </div>


            </section>
        </div>
    );
};

export default Productscard;
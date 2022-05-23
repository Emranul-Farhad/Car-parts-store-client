import React from 'react';

const Brandwiseshopscard = ({ brand }) => {
    return (
        <div>
            <div>
                <div className='brandimages w-[50%] mx-auto '>
                    <img className='shadow-2xl rounded-3xl' src={brand.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brandwiseshopscard;
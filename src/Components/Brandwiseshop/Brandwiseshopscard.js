import React from 'react';

const Brandwiseshopscard = ({ brand }) => {
    return (
        <div>
            <div>
                <div className='shadow-2xl rounded-lg'>
                    <img src={brand.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brandwiseshopscard;
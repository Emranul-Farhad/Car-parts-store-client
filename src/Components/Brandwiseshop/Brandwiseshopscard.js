import React from 'react';

const Brandwiseshopscard = ({ brand }) => {
    return (
        <div>
            <div>
                <div>
                    <img src={brand.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brandwiseshopscard;
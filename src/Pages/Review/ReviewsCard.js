import React from 'react';
import './Review.css'


const ReviewsCard = ({review}) => {
  const {qoute , img , from , name } = review

    return (
        <div>
            <div>

                {/*  */}
                <div class="containerreview">
                    <div class="box">
                        <div class="box-content">
                            <img
                                src="https://www.clker.com/cliparts/Y/m/n/S/F/E/orange-closing-quotation-mark-hi.png" class="quote" alt='a' />
                            <p className='text-left'> {qoute} </p>
                            
                            <img src={img} class="user" alt='a' />
                            <h3 className='mt-5 text-left'> Name : {name} </h3>
                            <h3 className='mt-2 text-left'> From : {from} </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
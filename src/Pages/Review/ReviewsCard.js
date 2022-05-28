import { Rating } from '@mui/material';
import React from 'react';
import './Review.css'


const ReviewsCard = ({review}) => {
  const {qoute , img , from , name , value} = review
  

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
                            
                            { img ? <img class='user' src={img} alt="pic" /> :
                            <img src="https://fadzrinmadu.github.io/hosted-assets/design-testimonial-section-using-html-and-css/1.jpg"  class="user" alt='a' />}

                            <h3 className='text-left mt-5'> Name : {name} </h3>
                            <h3 className='text-left '> From : {from} </h3>
                            <Rating name="read-only" value={value} readOnly />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewsCard from './ReviewsCard';


const Reviews = () => {

 const reviews = [
    {

        quote : 'Apar motors products quality amazing as well apar deliver products in comiited day ',
        name : 'Md Mazid Mahmud',
        from : 'Dhaka',
        img : 'https://imgur.com/Zt8inGj.png'
    },
    
]

// const [revieewss , setReviews] = useState([])

//    useEffect(() => {
//        fetch("reviews.json")
//        .then(res=> res.json())
//        .then(data => console.log(data))
//    },[])
console.log(reviews);

    return (
        <div>
         
         {
             
            <Swiper
            modules={[Autoplay, Pagination, Zoom, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            centeredslide="true"
            key={reviews.length}
            autoplay={true}
            breakpoints={{
                520: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
        >

            {
                reviews.map((review, index) => (
                    <SwiperSlide key={index} >
                        <ReviewsCard review={review} ></ReviewsCard>
                    </SwiperSlide>
                ))
            }

        </Swiper>
         }
        </div>
    );
};

export default Reviews;
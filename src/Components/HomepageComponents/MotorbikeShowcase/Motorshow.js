import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Motorbikecard from './Motorbikecard';



const Motorshow = () => {
    const [bikes , setBike] = useState([])
    useEffect(()=> {
        fetch('motor.json')
        .then(res => res.json())
        .then(data => setBike(data) )
    },[] )

    return (
        <div>
            <div className='row container'>
                <div className='col-lg-6'>
                <img className='w-[90%]' src="https://template.hasthemes.com/oswan/oswan/assets/img/banner/banner-2.png" alt="motor" />
                </div>
                {/* swiper slider */}
            
                
              <div className='col-lg-6'>
              <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    centeredslide="true"
                    // navigation
                    key={bikes.length}
                    autoplay={true}
                >

                    {
                        bikes.map((bike, index) => (
                            <SwiperSlide key={index} >
                                <Motorbikecard key={index} bike={bike} ></Motorbikecard>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
              </div>
               
            

            </div>
        </div>
    );
};

export default Motorshow;
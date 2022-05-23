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
            <div className='row m-5 gy-5  '>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className='w-[90%]' src="https://template.hasthemes.com/oswan/oswan/assets/img/banner/banner-2.png" alt="motor" />
                </div>
                {/* swiper slider */}
            
                
              <div className='col-lg-6 col-md-12 col-sm-12 lg:hidden md:block'>
              <Swiper
              className='h-[430px] w-[300px]'
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}
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
               
              <div className='col-lg-6 col-md-12 col-sm-12 hidden lg:block'>
              <Swiper
              className=''
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
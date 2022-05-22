import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Tirerimcard from './Tirerimcard';



const Tirerim = () => {
    const [tirerim , setTirerim] = useState([])
    useEffect(()=>{
        fetch("Tire.json")
        .then( res => res.json())
        .then(data => setTirerim(data))
    },[] )

    return (
        <div>
             <div className='row m-5'>
                {/* swiper slider */} 
              <div className='col-lg-6 col-md-12 col-sm-12'>
              <Swiper
              className='h-[430px] w-[400px]'
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    centeredslide="true"
                    // navigation
                    key={tirerim.length}
                    autoplay={true}
                >

                    {
                        tirerim.map((tirerim, index) => (
                            <SwiperSlide key={index} >
                                <Tirerimcard key={index} tirerim={tirerim} ></Tirerimcard>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
              </div>
               {/* products */}
               <div className='col-lg-6 col-md-12 col-sm-12'>
                <img className='w-[90%]' src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/1_fec73ba1-a7bf-4cb5-af16-4818eac5ddbb.png?v=1632306630" alt="motor" />
                </div>

            </div>
        </div>
    );
};

export default Tirerim;
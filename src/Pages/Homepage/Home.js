import React from 'react';
import Hero from '../../Components/HomepageComponents/Hero';
import Motorshow from '../../Components/HomepageComponents/MotorbikeShowcase/Motorshow';
import Offerbanner from '../../Components/HomepageComponents/Offerbanner/Offerbanner';
import Tirerim from '../../Components/HomepageComponents/Tireshowcase/Tirerim';
import Timercount from '../../Components/Timercount';





const Home = () => {

    return (
        <div>
            {/* herrro banner*/}
            <Hero></Hero>
            {/* count down */}
            <div className='mt-[120px]'>
                <Timercount></Timercount>
            </div>
            {/* products show case part start here motorbike parts */}
            <div className='mt-[130px]'>
                <Motorshow></Motorshow>
            </div>
            {/* offer banner */}
            <div className='mt-[100px]'>
                <Offerbanner></Offerbanner>
            </div>
            {/* tireShow case */}
            <div className='mt-[120px]'>
                <Tirerim></Tirerim>
            </div>
        </div>
    );
};

export default Home;
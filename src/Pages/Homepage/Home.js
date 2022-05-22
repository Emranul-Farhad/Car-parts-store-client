import React from 'react';
import Hero from '../../Components/HomepageComponents/Hero';
import Motorshow from '../../Components/HomepageComponents/MotorbikeShowcase/Motorshow';





const Home = () => {

    return (
        <div>
            {/* herrro banner*/}
            <Hero></Hero>
            {/* herro banne end */}
            {/* products show case part start here motorbike parts */}
            <div className='mt-[130px]'>
                <Motorshow></Motorshow>
            </div>
            {/* motor show end here */}
            <div className='mt-[100px]'>
              
            </div>
        </div>
    );
};

export default Home;
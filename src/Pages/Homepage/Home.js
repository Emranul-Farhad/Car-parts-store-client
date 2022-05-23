import React from 'react';
import Brandwiseshops from '../../Components/Brandwiseshop/Brandwiseshops';
import Delivery from '../../Components/HomepageComponents/DeliverySystem/Delivery';
import Hero from '../../Components/HomepageComponents/Hero';
import Motorshow from '../../Components/HomepageComponents/MotorbikeShowcase/Motorshow';
import Offerbanner from '../../Components/HomepageComponents/Offerbanner/Offerbanner';
import Products from '../../Components/HomepageComponents/Products/Products';
import Tirerim from '../../Components/HomepageComponents/Tireshowcase/Tirerim';
import Timercount from '../../Components/Timercount';
import Productsdetails from '../Productsdetails/Productsdetails';





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
            {/* our policy delivery slogan*/}
            <div className='mt-[130px]' >
                <Delivery></Delivery>
            </div>
            <div className='mt-[130px]' >
                <Brandwiseshops></Brandwiseshops>
            </div>
            {/* products show all*/}
            <div className='mt-[120px]'>
                <Products></Products>
            </div>
            <div>
                <Productsdetails></Productsdetails>
            </div>
        </div>
    );
};

export default Home;
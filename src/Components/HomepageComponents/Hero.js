import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import AnimationStyles from 'react-awesome-slider/src/styled/open-animation/open-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import './Hero.css'


// const buttonStyle = {
//     padding: "15px",
//     borderRadius: "50%",
//     background: "red",
//     opacity: 0.7,
//     fontSize: "20px"
// };


// const bgImg = {
//     position: "absolute",
//     zIndex: -1,
//     left: 0,
//     top: 0,
//     width: "100%",
//     height: "100%"

// };



export default function Hero() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="mt-[75px] ">
            <AutoplaySlider
                className="herro"
                animation="openAnimation"
                organicArrows={true}
                  play={true}
                cssModule={[AnimationStyles]}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >

                <div className="opacity-95 " data-src="http://apar.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2020/06/Untitled-7.png">

                    <h1 className=" font-extrabold  text-6xl text-left lg:mr-[700px] text-white">STOP
                        TECH SELECT <br /> SPORTS BRAKE  </h1>

                </div>

                <div className="opacity-95 " data-src="http://apar.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2020/06/Untitled-4-1.png">

                    <h1 className="font-extrabold text-6xl text-left lg:mr-[700px] text-white">AUTO AC <br /> COMPRESSOR </h1>

                </div>

                <div className="opacity-95 " data-src="http://apar.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2020/06/Untitled-6.png">

                    <h1 className="font-extrabold  text-6xl text-left lg:mr-[750px] text-white">
                        CHEVY/GMC <br />  1500 SILVERDO </h1>

                </div>

                <div className="opacity-95 " data-src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/1_e9c8f067-381c-4d1e-9a61-feef1bf277c8.png?v=1612511663">

                    <h1 className="mt-20px lg:ml-[700px] text-[#FF5E2B] text-6xl font-extrabold">10% OFF<br /> All VECHILE PARTS </h1>

                </div>
                <div className="opacity-95 " data-src="https://cdn.shopify.com/s/files/1/0610/6287/3301/files/slider-3.jpg?v=1640592027">

                    <h1 className="text-5xl font-extrabold text-left lg:ml-[700px] text-[#FF5E2B]">
                        <span> OUR NEW PRODUCTS </span> <br /> & YOUR BEST <span>  COLLECTIONS</span> </h1>
                    <p className="lg:ml-[400px] text-2xl font-extrabold text-white">FLASH SELL</p>

                </div>

            </AutoplaySlider>
        </div>
    );
}



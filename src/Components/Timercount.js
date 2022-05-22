import React from 'react';
import Countdown from 'react-countdown';



const Timercount = () => {

    const Completionist = () => <span className='text-2xl font-bold text-accent'>Offer closed!</span>;

    // Renderer callback with condition
    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div>
                    <span className='p-4 bg-[#232634] rounded-box text-white font-extrabold text-2xl  mr-5' >{days}</span>
                    <span className='p-4 bg-[#232634] rounded-box text-white font-extrabold text-2xl  mr-5' >{hours}</span>
                    <span className='p-4 bg-[#232634] rounded-box text-white font-extrabold text-2xl  mr-5 ' >{minutes}</span>
                    <span className='p-4 bg-[#232634] rounded-box text-white font-extrabold text-2xl  ' >{seconds}</span>
                </div>
            )
        }
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 900000000 }
                renderer={renderer}
            />,
        </div>
    );
};

export default Timercount;
import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Animation from './not.json'





const Notfound = () => {

    const navigate = useNavigate()
    const container = useRef(null)

    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });
        return () => instance.destroy();
    }, [])

    return (
        <div  >
              <button onClick={()=> navigate("/") } className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"> Back to Home </button>
            <div className='w-[80%]'>
                <div ref={container} ></div>
            </div>
        </div>
    );
};

export default Notfound;
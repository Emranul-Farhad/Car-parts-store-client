import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Animation from './loading.json'




const Loading = () => {

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
        <div>
            <div className='containers flex justify-center'>
                <div className='w-[50%]' ref={container} ></div>
            </div>
        </div>
    );
};

export default Loading;
import React from 'react';
import { useSpring, animated } from 'react-spring';





const Delivery = () => {

    const styles = useSpring({
        loop: true,
        to: [
          { opacity: 1, color: '#FC3434' },
          { opacity: 0, color: '#FC5A36' },
        ],
        from: { opacity: 0, color: 'red' },
      })

    return (
        <div>
        
        <animated.div className="font-extrabold text-3xl" style={styles}> YOURT TRUSTED APAR AUTO MOTIVE MARKET </animated.div>
            
            <div className='shadow-2xl p-3 rounded-md bg-base-secondary grid grid-cols-1 lg:grid-cols-4 lg:gap-y-0 gap-y-5 mx-5 mt-20 '>
              <div className='flex  flex-row mx-10'>
                  <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/SERVICES_1.png?v=1611834256" alt="" />
                  <p className='mx-3 font-bold mt-2'> Logistic Support</p>
              </div>
              <div className='flex  flex-row mx-10'>
                  <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/SERVICES_2.png?v=1611834279" alt="" />
                  <p className='mx-3 font-bold mt-2' > 24/7 Support</p>
              </div>
              <div className='flex  flex-row mx-10'>
                  <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/SERVICES_3.png?v=1611834396" alt="" />
                  <p className='mx-3 font-bold' >Products Damage money back </p>
              </div>
              <div className='flex  flex-row mx-10'>
                  <img src="https://cdn.shopify.com/s/files/1/0266/4166/2049/files/SERVICES_4.png?v=1611834371" alt="" />
                  <p className='mx-3 font-bold'>Worldwide Shipping</p>
              </div>
            

            </div>
        </div>
    );
};

export default Delivery;
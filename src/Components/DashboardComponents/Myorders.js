import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Fire key/Firekey';



const Myorders = () => {

    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
// state handel
  const  navigate = useNavigate()

    useEffect(() => {
        const email = user?.email
        console.log(email);
        if (email) {
            const url = (`http://localhost:8000/orders?email=${email}`)
            console.log(url);
            fetch(url, {
                method : "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accesstoken")}`
                }
            } )
                .then(res => {
                    console.log(res , "res check");
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth)
                        navigate('/login')
                        localStorage.removeItem("accesstoken")
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'unauthorized access',
                           
                          })
                    }
                    return res.json()
                })

                .then(data => setOrders(data))

        }
    }, [user , navigate])





    console.log(orders);

    return (
        <div className='mt-10'>




        </div>
    );
};

export default Myorders;






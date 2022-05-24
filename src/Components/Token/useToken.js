import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';





const useToken = (user) => {

    // user state for token
    const [token, setToken] = useState('')

    // use effet
    useEffect(() => {
        const email = user?.user?.email;
        const currentuser ={ email : email}
        if(email){
            const url = `http://localhost:8000/users/${email}`
            fetch(url,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentuser),
        })
        .then(res => res.json())
        .then(data => console.log(data, " gert from here"))

        }
        

    }, [user])




    return [token];
};

export default useToken;
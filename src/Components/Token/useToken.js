import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';




const useToken = (user) => {

    // user state for token
    const [token, setToken] = useState('')

    // use effet
    useEffect(() => {
        const email = user?.user?.email;
        const currentuser = { email: email }
        if (email) {
            const url = `https://thawing-beach-36415.herokuapp.com/users/${email}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentuser),
            })
                .then(res => res.json())
                .then(data => {
                    const getToken = data.token;
                    localStorage.setItem("accesstoken", getToken)
                    setToken(getToken)
                    console.log(data)
                })

        }


    }, [user])




    return [token];
};

export default useToken;
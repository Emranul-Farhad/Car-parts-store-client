import React, { useEffect, useState } from 'react';




const useAdmin = (user) => {

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            const url = `https://thawing-beach-36415.herokuapp.com/users/${email}`
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },

            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    console.log(data);
                })

        }


    }, [user])



    return [admin]
};

export default useAdmin;
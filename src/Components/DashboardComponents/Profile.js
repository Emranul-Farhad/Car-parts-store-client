import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Fire key/Firekey';
import './Profile.css'


const Profile = () => {

    const [user] = useAuthState(auth)


    return (
        <div>
            <body>
                <h1 className='mt-20 text-center font-extrabold text-2xl mr-[100px]'>welcome <span className='text-[#788CCF]'>{user?.displayName} </span> to your Profile !! </h1>
                <div class="cardprofile">
                    <div class="image">
                        <img src="https://desklib.com/static/src/assets/images/v2/profile_3.svg" alt='p' />
                    </div>
                    <div class="details">
                        <div class="center">
                            <h1> {user?.displayName} <br /> <span> </span> </h1>
                            <p> {user?.email} </p>
                            {/* <ul>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul> */}
                        </div>
                    </div>
                </div>
            </body>

        </div>
    );
};

export default Profile;



// 
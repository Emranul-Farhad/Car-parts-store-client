import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Fire key/Firekey';
import './Profile.css'


const Profile = () => {
 
    const [user] = useAuthState(auth)


    return (
        <div className='profile' >
            gray<div class="profile-card">
                <div class="profile-card-header">
                    <div class="profile-image"></div>

                    <div class="profile-info">
                        <h3 class="profile-name">{user?.displayName} </h3>
                        <p class="profile-desc"> {user?.email} </p>
                    </div>
                </div>

                <div class="profile-card-body">
                    <ul class="status">
                        {/* <li>
                            <span class="status-value">532</span>
                            <span class="status-text">Posts</span>
                        </li> */}

                        <li>
                            <span class="status-value">1.5m</span>
                            <span class="status-text">Followers</span>
                        </li>

                        <li>
                            <span class="status-value">423</span>
                            <span class="status-text">Following</span>
                        </li>
                    </ul>

                    <div class="action">
                        <button class="btn btn-pink">Follow</button>
                        <button class="btn btn-gray-outline">Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
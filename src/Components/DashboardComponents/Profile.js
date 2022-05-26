import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Fire key/Firekey';
import './Profile.css'


const Profile = () => {

    const [user] = useAuthState(auth)


    return (
        <div className='flex justify-center'>
            <div class="cardprofile-container">
                <span class="pro">ACTIVE</span>
                <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
                <h3>Ricky Park</h3>
                <h6>New York</h6>
                <p>User interface designer and <br /> front-end developer</p>
                <div class="buttons">
                    <button class="primary">
                        Message
                    </button>
                    <button class="primary ghost">
                        Following
                    </button>
                </div>
                <div class="skills">
                    <h6>Skills</h6>
                    <ul>
                        <li>UI / UX</li>
                        <li>Front End Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node</li>
                    </ul>
                </div>
            </div>



        </div>

    );


};

export default Profile;




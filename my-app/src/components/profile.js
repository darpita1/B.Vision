import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../styles/profile.css';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

function Profile(props) {

    const { currentUser } = useAuth();
    const [nameone, setnameone] = useState('');

    async function readData() {
        const result = await axios({
            method: 'get',
            url: 'https://b-vision-18af8.firebaseio.com/users.json',
        });
        setnameone(result.data.b.name);
    }

    readData();

    return (
        <div className="profile container">
            <h1 className="title is-1">Profile</h1>
            <div className="profile-info columns">
                <div className="column is-4">
                    <img className="profile-pic" src="https://www-nomadcruise-com.exactdn.com/wp-content/uploads/22-223930_avatar-person-neutral-man-blank-face-buddy-facebook.png" alt="Profile pic" height="200px" width="200px"></img>
                </div>
                <div className="column is-6">
                    <h2 className="title is-2">{nameone}</h2>
                    <h2 className="subtitle is-4">Email: {currentUser.email}</h2>
                    <h4 className="subtitle is-4">{props.title}</h4>
                </div>
            </div>
            <div className="video-container">
                <h2 className="title is-2">Videos</h2>
                <div className="inner-container">   
            </div>
        </div>
    </div>
    );
}

export default Profile
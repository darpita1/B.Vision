import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../styles/profile.css';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Profile(props) {

    const { currentUser, logout } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogout() {
        setError('');
        console.log("trying to log out");
        try {
            console.log("curruser:", currentUser);
            console.log("uid", currentUser.uid);
            await logout();
            console.log("curruser after logout:", currentUser);
            history.push('/login');
            
        } catch {}
        setError('Failed to log out');
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    async function readData() {
        const username = getUsername(currentUser.email);
        const result = await axios({
            method: 'get',
            url: `https://b-vision-18af8.firebaseio.com/users/${username}.json`,
        });
        setUserInfo(result.data);
        
    }

    readData();

    return (
        <div className="profile container">
            <input className="logout button is-dark" value="Logout" type="submit" onClick={handleLogout}/>
            <h1 className="title is-1">Profile</h1>
            <div className="profile-info columns">
                <div className="column is-4">
                    <img className="profile-pic" src="https://www-nomadcruise-com.exactdn.com/wp-content/uploads/22-223930_avatar-person-neutral-man-blank-face-buddy-facebook.png" alt="Profile pic" height="200px" width="200px"></img>
                </div>
                <div className="column is-6">
                    <h2 className="title is-2">{userInfo.name}</h2>
                    <h2 className="subtitle is-4">Email: {currentUser.email}</h2>
                    <h4 className="subtitle is-4">Title: {userInfo.title}</h4>
                </div>
            </div>
            <div className="video-container">
                <h2 className="title is-2">Videos</h2>
                <div className="inner-container">   
                {JSON.stringify(currentUser)}
            </div>
        </div>
    </div>
    );
}

export default Profile
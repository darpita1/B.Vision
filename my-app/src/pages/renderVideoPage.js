import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';

export default function RenderVideoPage(props) {

    const location = useLocation();
    const history = useHistory();
    const { currentUser } = useAuth();
    const [notSaved, setNotSaved] = useState('true');

    
   

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    async function handleSave() {
        if (notSaved){
            const username = getUsername(currentUser.email);
            const result = await axios({
            method: 'get',
            url: `https://cors-anywhere.herokuapp.com/https://b-vision-18af8.firebaseio.com/users/${username}/videos.json`,
        }).then((res) => res.data).then((x) => {
            console.log("x", x);
            x.push(location.state)
            updateInfo(username, "videos", x);
        });
    }
    }


    async function updateInfo(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://cors-anywhere.herokuapp.com/https://b-vision-18af8.firebaseio.com/users/${toupdate}/.json`,
            data: obj
        });
        console.log("saved");
        setNotSaved(false);
    }

    function handleRedo() {
        history.push('/makeVideo');
    }

    return (
    <div>
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <a className="navbar-item">
                    B.Vision
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item" to="/profile">Profile</Link> 
                </div>
            </div>
        </nav>
        {/* <video width="320" height="240" src={location.state} type="video/mp4" controls/> */}
        <video width="500" height="400" controls>
            <source src={location.state} type="video/mp4"/>
        </video>
        <input className="button is-dark" type="button" onClick={handleSave} value="Save Video" />
        <input className="button is-dark" type="button" onClick={handleRedo} value="Redo"/>
    </div>);
}
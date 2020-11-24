import React, { useRef, useState } from 'react';
import "./../styles/render.css";
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import blur from './blur.mp4'

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
        <div className="background">
             <video id="myVideo" muted>
                <source src={blur} type='video/mp4' />
            </video>
        <nav className="navbar is-grey-darker">
        <div className="navbar-brand">
            <h2 className="big is-family-secondary navbar-item">
                B.Vision
            </h2>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                <Link className="medium navbar-item" to="/profile">Profile</Link> 
            </div>
        </div>
        </nav>
        <div className="transparent fully-center vidss">
        <video className="rounded" width="700" height="550" controls>
            <source src={location.state} type="video/mp4"/>
        </video>
        </div>
        <div className="fully-center buttonss">
            <input className="button is-dark" type="button" onClick={handleSave} value="Save Video" disabled={!notSaved}/>
            <input className="button is-dark" type="button" onClick={handleRedo} value="Redo"/>
        </div>
    </div>
        
    );
}
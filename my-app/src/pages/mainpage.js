import React, { useState, useEffect } from 'react';
import '../styles/autocomplete.css'
import '../styles/mainPage.css'
import blur from './blur.mp4';

import VideoSelector2 from '../components/videoSelector2.js';
import AutoCompleteNew from '../components/AutoCompleteNew.js'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function MainPage() {
    const [steps, setSteps] = useState({});
     return (
        <div className="">
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
        <div className="container">
            <AutoCompleteNew className="AutoCompleteText" items={['Bedi Dhamaal', 'Bhabi', 'Chaffa', 'Dhamaal Roti Variation', 'End Jumps', 'Faslaan', 'Fast Jhummar', 'Jhummar Variation', 'Pataka', 'Phul Punjab', 'Phulka', 'Phumaniya', 'Punjab', 'Round Bedi', 'Sammi', 'Side Punjab', 'Single Dhamaal', 'Single Dhamaal Variation']} />
        </div>
        <VideoSelector2 />
        </div>
    );
}

export default MainPage;
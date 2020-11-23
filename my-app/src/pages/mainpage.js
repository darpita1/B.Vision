import React from 'react';
import VideoSelector2 from '../components/videoSelector2.js';
import AutoCompleteNew from '../components/AutoCompleteNew.js'
import { Link } from 'react-router-dom';
//import concat from '../transloadit1.js';

function MainPage() {
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
        <div className="container">
            <AutoCompleteNew className="autocomplete" items={['Bedi Dhamaal', 'Bhabi', 'Chaffa', 'Dhamaal Roti Variation', 'End Jumps', 'Faslaan', 'Fast Jhummar', 'Jhummar Variation', 'Pataka', 'Phul Punjab', 'Phulka', 'Phumaniya', 'Punjab', 'Round Bedi', 'Sammi', 'Side Punjab', 'Single Dhamaal', 'Single Dhamaal Variation']} />
        </div>
        <VideoSelector2 />
        </div>
    );
}

export default MainPage;
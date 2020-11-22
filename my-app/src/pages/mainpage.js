import React from 'react';
import VideoSelector2 from '../components/videoSelector2.js';
import SearchContainer from '../components/searchContainer.js'
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div>
            <nav className="navbar is-info">
            <div className="navbar-brand">
                <a class="navbar-item">
                    B.Vision
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <Link className="navbar-item" to="/profile">Profile</Link> 
                </div>
            </div>
        </nav>
        <SearchContainer/>
        <VideoSelector2 />
        </div>
    );
}

export default MainPage;
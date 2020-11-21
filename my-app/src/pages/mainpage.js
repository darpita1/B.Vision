import React from 'react';
import VideoContainer from './videocontainer.js';
import VideoSelector2 from '../components/videoSelector2.js';
import SearchContainer from '../components/searchContainer.js'
import axios from 'axios';
//import Searchbar from './searchbar.js';

function MainPage() {
    return (
        <div>
            <nav class="navbar is-info">
            <div class="navbar-brand">
                <a class="navbar-item">
                    B.Vision
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">Profile</a> 
                </div>
            </div>
        </nav>
        <SearchContainer/>
        <VideoSelector2 />
        </div>
    );
}

export default MainPage;
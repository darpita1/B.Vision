import React from 'react';
import VideoContainer from './videocontainer.js';
import VideoSelector from './videoselector.js';
import Searchbar from './searchbar.js';

function Mainpage() {
    return (
        <div>
            <Searchbar />
            <VideoContainer />
            <VideoSelector />
        </div>
    );
}

export default Mainpage;
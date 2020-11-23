import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import VideoCard from './videoCard.js';
import VideoCard1 from './videoCard1.js';
import VideoCard2 from './videoCard2.js';
import VideoCard3 from './videoCard3.js';

function VideoSelector2() {
    
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <VideoCard1 />
                </div>
                <div className="column">
                    <VideoCard2 />
                </div>
                <div className="column">
                    <VideoCard3 />
                </div>
            </div>
            {/* <div className="columns">
                <div className="column">
                    <VideoCard number="4"/>
                </div>
                <div className="column">
                    <VideoCard number="5"/>
                </div>
                <div className="column">
                    <VideoCard number="6"/>
                </div>
            </div> */}
        </div>
    );

};

export default VideoSelector2;
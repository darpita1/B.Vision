import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import VideoCard from './videoCard.js';

function VideoSelector2() {
    
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <VideoCard number="1"/>
                </div>
                <div className="column">
                    <VideoCard number="2"/>
                </div>
                <div className="column">
                    <VideoCard number="3"/>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <VideoCard number="4"/>
                </div>
                <div className="column">
                    <VideoCard number="5"/>
                </div>
                <div className="column">
                    <VideoCard number="6"/>
                </div>
            </div>
        </div>
    );

};

export default VideoSelector2;
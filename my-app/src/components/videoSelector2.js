import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import VideoCard from './videoCard.js';
import VideoCard1 from './videoCard1.js';
import VideoCard2 from './videoCard2.js';
import VideoCard3 from './videoCard3.js';

function VideoSelector2() {
    
    const [one, setone] = useState('');
    const [two, settwo] = useState('');
    const [three, setthree] = useState('');

    function setparentone(value) {
        setone(value);
    }

    function setparenttwo(value) {
        settwo(value);
    }

    function setparentthree(value) {
        setthree(value);
    }

    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <VideoCard1 parentfunction={setparentone} />
                </div>
                <div className="column">
                    <VideoCard2 parentfunction={setparenttwo}/>
                </div>
                <div className="column">
                    <VideoCard3 parentfunction={setparentthree}/>
                </div>
            </div>


    <h1>{one}</h1>
    <h1>{two}</h1>
    <h1>{three}</h1>
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
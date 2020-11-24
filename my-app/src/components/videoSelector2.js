import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import VideoCard from './videoCard.js';
import VideoCard1 from './videoCard1.js';
import VideoCard2 from './videoCard2.js';
import VideoCard3 from './videoCard3.js';
import { Link, useHistory } from "react-router-dom";

function VideoSelector2() {
    
    const [one, setone] = useState('');
    const [two, settwo] = useState('');
    const [three, setthree] = useState('');
    const history = useHistory();

    let finalUrl = "";

    function setparentone(value) {
        setone(value);
    }

    function setparenttwo(value) {
        settwo(value);
    }

    function setparentthree(value) {
        setthree(value);
    }

    function getVideoUrl() {
        console.log(one, two, three);
        if ((one != '') & (two != '') & (three != '')) {
            let url = `https://storage.cloud.google.com/b-vision-18af8.appspot.com/concat/${one}_${two}_${three}.mp4`;
            finalUrl = url;   
        }   
        

    }

    function handleMakeVideoButton() {
        if ((one != '') & (two != '') & (three != '')) {
        getVideoUrl();
        console.log("final", finalUrl);
        history.push({ 
            pathname: '/renderVideo',
            state: finalUrl
           });
        }
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
            <div className="buttoncenter">
                <input className="button is-grey-darker" type="button" value="Make Video" onClick={handleMakeVideoButton}/>
            </div>
        </div>
    );

};

export default VideoSelector2;
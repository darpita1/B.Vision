import React, {useState} from 'react';
import 'bulma/css/bulma.css';

function VideoCard(props) {

    const [one, setone] = useState('');

    // call to database to fill options maybe


    return (
        <div className="card">
            <div className="card-content container">
                <h2 className="subtitle is-4">Video {props.number}</h2>
                <img src="https://tutorials.avideo.com/view/img/video-placeholder-gray.png" alt="bvis" width="500px" height="300px"/>
            </div>
            <div className="card-footer">
            <select onChange={(e)=> setone(e.target.value)}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div> );
}

export default VideoCard;
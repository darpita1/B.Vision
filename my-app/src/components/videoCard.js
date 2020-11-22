import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import image1 from '../media/bg_createAccount.JPG';


function VideoCard(props) {

    const [one, setone] = useState("https://tutorials.avideo.com/view/img/video-placeholder-gray.png");

    
    // call to database to fill options maybe

    function changeImage(e) {
        let newUrl = `https://firebasestorage.googleapis.com/v0/b/b-vision-18af8.appspot.com/o/${e}.png?alt=media`;
        setone(newUrl);
    }

    return (
        <div className="card">
            <div className="card-content container">
                <h2 className="subtitle is-4">Video {props.number}</h2>
                <img src= {one} alt="bvis" width="500px" height="300px"/>
            </div>
            <div className="card-footer">
            <select onChange={(e)=> changeImage(e.target.value)}>
                    <option value="volvo">Volvo</option>
                    <option value="bhangrajeet">bhangrajeet</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div> );
}

export default VideoCard;
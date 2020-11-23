import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import image1 from '../media/bg_createAccount.JPG';


function VideoCard1({parentfunction}) {

    const [one, setone] = useState("https://tutorials.avideo.com/view/img/video-placeholder-gray.png");

    
    // call to database to fill options maybe

    function changeImage(e) {
        let newUrl1 = `https://firebasestorage.googleapis.com/v0/b/b-vision-18af8.appspot.com/o/${e}.png?alt=media`;
        let newUrl = `https://firebasestorage.googleapis.com/v0/b/b-vision-18af8.appspot.com/o/thumbnails%2F${e}.jpg?alt=media&token=50019ba2-f751-4904-ad74-e6628dc7c89b`
        setone(newUrl);
        parentfunction(e);
    }

    return (
        <div className="card">
            <div className="card-content container">
                <h2 className="subtitle is-4">Video 1</h2>
                <img src= {one} alt="bvis" width="500px" height="300px"/>
            </div>
            <div className="card-footer">
            <select onChange={(e)=> changeImage(e.target.value)}>
                    <option value=""> </option>
                    <option value="jhummar">Jhummar</option>
                    <option value="jhummar_var1">Jhummar Variation</option>
                    
                </select>
            </div>
        </div> );
}

export default VideoCard1;
import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import image1 from '../media/bg_createAccount.JPG';
import '../styles/mainPage.css'


function VideoCard3({parentfunction}) {

    const [one, setone] = useState("https://storage.cloud.google.com/b-vision-18af8.appspot.com/bhangrajeet.png?_ga=2.194401261.-1912959919.1606033974");

    
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
                <h2 className="subtitle is-4">Video 3</h2>
                <img src= {one} alt="bvis" width="500px" height="300px"/>
            </div>
            <div className="card-footer">
                <select className="select full" onChange={(e)=> changeImage(e.target.value)}>
                    <option value=""></option>
                    <option value="end_jumps">End Jumps</option> 
                    <option value="phumaniya">Phumaniya</option>
                </select>
            </div>
        </div> );
}

export default VideoCard3;
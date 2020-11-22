import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import image1 from '../media/bg_createAccount.JPG';


function VideoCard(props) {

    const [one, setone] = useState("https://tutorials.avideo.com/view/img/video-placeholder-gray.png");

    
    // call to database to fill options maybe

    function changeImage(e) {
        let newUrl1 = `https://firebasestorage.googleapis.com/v0/b/b-vision-18af8.appspot.com/o/${e}.png?alt=media`;
        let newUrl = `https://firebasestorage.googleapis.com/v0/b/b-vision-18af8.appspot.com/o/thumbnails%2F${e}.jpg?alt=media&token=50019ba2-f751-4904-ad74-e6628dc7c89b`
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
                    <option value="bhangrajeet">bhangrajeet</option>
                    <option value="bedi_dhamaal">Bedi Dhamaal</option>
                    <option value="bhabi">Bhabi</option>
                    <option value="chaffa">Chaffa</option>
                    <option value="dhamaal_roti_var1">Dhamaal Roti Variation</option>
                    <option value="end_jumps">End Jumps</option>
                    <option value="faslaan">Faslaan</option>
                    <option value="fast_jhummar">Fast Jhummar</option>
                    <option value="jhummar_var1">Jhummar Variation</option>
                    <option value="pataka">Pataka</option>
                    <option value="phul_punjab">Phul Punjab</option>
                    <option value="phulka">Phulka</option>
                    <option value="phumaniya">Phumaniya</option>
                    <option value="phumaniya_roll">Phumaniya Roll</option>
                    <option value="punjab">Punjab</option>
                    <option value="round_bedi">Round Bedi</option>
                    <option value="sammi">Sammi</option>
                    <option value="side_punjab">Side Punjab</option>
                    <option value="single_dhamaal">Single Dhamaal</option>
                    <option value="single_dhamaal_var1">Single Dhamaal Variation</option>
                </select>
            </div>
        </div> );
}

export default VideoCard;
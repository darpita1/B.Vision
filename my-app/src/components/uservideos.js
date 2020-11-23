import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Uservideos(props) {
    
    const [vids, setvids] = useState([]);
    const [loading, setLoading] = useState(false);

    async function readviddata() {
        
        if (!loading) {
            const result = await axios({
                method: 'get',
                url: `https://b-vision-18af8.firebaseio.com/users/${props.username}.json`,
                withCredientials: true
            }).then((x) => setvids(x.data.videos));
            setLoading(true);
        }
    }

    async function deleteVid(event) {
        let vid = event.target.id;
        console.log("eventid:", vid);
        const result = await axios({
            method: 'get',
            url: `https://b-vision-18af8.firebaseio.com/users/${props.username}/videos.json`,
        }).then((res) => res.data).then((x) => {
            console.log("x", x);
            const index = x.indexOf(vid);
            console.log("indx", index);
            if (index > -1) {
                x.splice(index, 1);
            }
            updateInfo(props.username, "videos", x);
        });
        readviddata();
    }


    async function updateInfo(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://b-vision-18af8.firebaseio.com/users/${toupdate}/.json`,
            data: obj
        });
    }


    readviddata();
    //console.log("before", vids);

    return (
       <div>
           <br/>
        <h1 className="title"> My Videos </h1>
        {vids.map((vid) =>{
            if (vid != 'google.com'){
           return (
            <div>
                <li>
                    <a className="btn btn-link" key={vid} href = {vid}> Video </a>
                    <button id={vid} className="button is-danger is-small is-outlined" onClick={(e) => deleteVid(e)}>
                        <span id={vid}>Delete</span>
                    </button>
                </li>
                <br/>
            </div>
           )}
        })}

       </div>
       

    );
}

export default Uservideos;
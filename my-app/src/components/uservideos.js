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

    async function deleteVid(e) {
        let vid = e.target.id;
        console.log(vids);
        const result = await axios({
            method: 'delete',
            url: `https://b-vision-18af8.firebaseio.com/users/${props.username}/videos/0.json`,
            withCredentials: true
        });
        console.log(vids);
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
                <li key={vid}>
                    <a className="btn btn-link" href = {vid}> Video </a>
                    <button id={vid} className="button is-danger is-small is-outlined" onClick={(e) => deleteVid(e)}>
                        <span>Delete</span>
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
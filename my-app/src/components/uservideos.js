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
    
    readviddata();
    console.log(vids);

    return (
        
       <div>

        <h1> videos </h1>
        {vids.map((vid) =>{
           return (
            <li>
            <a href = {vid}> link </a>
            </li>
           )
           
           
        })}

       </div>
       

    );
}

export default Uservideos;
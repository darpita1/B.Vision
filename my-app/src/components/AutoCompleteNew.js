import React, { useState, useEffect, useDebounce } from 'react';
import '../styles/autocomplete.css'
import 'bulma/css/bulma.css';
import '../styles/searchContainer.css';
import axios from 'axios';


function AutoCompleteNew (props) {

    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');
    const [display, setDisplay] = useState(false);
    const [stepInfo, setStepInfo] = useState({});
    const [loading, setLoading] = useState(false);
    
    function otcwrapper(e) {
        //setTimeout(function() {
            onTextChange(e)
        //  }, 0);

        rswrapper();
    }
    
    function getVideoUrl(path) {
       
        let url = `https://storage.cloud.google.com/b-vision-18af8.appspot.com/dance_videos/${path}.mp4`;
        let element = (<video width="400" height="250" controls>
                            <source src={url} type="video/mp4"/>
                        </video>);
        return element;
    }

    function onTextChange(e) {
        setDisplay(false);
        const { items } = props;
        const value = e.target.value;
        let suggestions1 =[];
        

        if (value.length >0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions1 = items.sort().filter(v => regex.test(v));
        }
        
        

            setSuggestions(suggestions1);
            setText(value);
         
    }

    function suggestionSelected(value) {
        //setTimeout(function() {
        setText(value);
        setSuggestions([]);
        setLoading(true);
        readStepData(value);
         //}
        
        // ,1000);
    }

    function renderSuggestions() {
        // setTimeout(function() {
        if (suggestions.length ===0) {
            return null;
        }
        
        return (
            <ul>
                {suggestions.map((item)=><li className="AutoCompleteText layout center" key={item} onClick={() => suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
        // }, 500);
    }

    function rswrapper() {
        setTimeout(function() {
            setDisplay(true)
        }, 1000);
        
    }

    async function readStepData(step) {
        console.log("step", step);
        const result = await axios({
        method: 'get',
        url: `https://cors-anywhere.herokuapp.com/https://b-vision-18af8.firebaseio.com/stepInfo/${step}.json`,
        }).then((x) => {
            setStepInfo(x.data);
            setLoading(false);
        }).catch((error) => console.log(error));
    }
    //readStepData('Bhabi');

    function getQR(link) {
        if (link) {
            const source =  `http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
            return (<img className="qrcode" src={source} height="100px" width="100px"></img>);
        }
    }

    return (
        <div className="container searchContainer">
            <div className="column">
                <div className=" autocomplete container">
                    <div className="inputWrapper justify-center">
                    <h2 className="title">Learn Bhangra!</h2>
                    
                    <input className="AutoCompleteText input layout" value={text} onChange={otcwrapper} type="text" />
                    <div className="results-container">
                    { display ? renderSuggestions() : null  }
                    </div>
                    </div>
                </div>
                <div className=" autocomplete container column">
                    <div className="inputWrapper justify-center">
                    <h2 className="title">View Step</h2>
                        {!loading ? getVideoUrl(stepInfo.name) : null}
                    </div>
                </div>
                <div className="column">
                    <div className = "column justify-center">
                        <h2 className="title ">Step Info</h2>
                        <h2 className="subtitle">{!loading ? stepInfo.display_name : null}</h2>
                        {!loading ? getQR(stepInfo.link) : null}
                        <br/>
                        {!loading ? <a href={stepInfo.link} target="_blank">Click here for Tutorial!</a> : null}
                    </div>
                </div>
            </div>
        </div>
    );

}





export default AutoCompleteNew;
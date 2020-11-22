import React, { useState, useEffect, useDebounce } from 'react';

function AutoCompleteNew (props) {

    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');
    const [display, setDisplay] = useState(false);
    
    
    function otcwrapper(e) {
        //setTimeout(function() {
            onTextChange(e)
        //  }, 0);

        rswrapper();
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
                {suggestions.map((item)=><li onClick={() => suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
        // }, 500);
    }

    function rswrapper() {
        setTimeout(function() {
            setDisplay(true)
        }, 800);
        
    }

    return (
        <div>
                <input value ={text} onChange={otcwrapper} type="text" />
                { display ? renderSuggestions() : null  }
        </div>
    );

}





export default AutoCompleteNew;
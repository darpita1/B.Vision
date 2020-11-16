import React from 'react';
import AutoComplete from '@material-ui/lab/AutoComplete';

const Searchbar = () => {
   
    const array = [1,2,3,4];

    return (
        <div>
            <AutoComplete />

            <p>Searchbar</p>
        </div>
    );
}

export default Searchbar;
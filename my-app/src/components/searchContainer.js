import React from 'react';
import AutoCompleteNew from './AutoCompleteNew.js'

function SearchContainer() {
    return (
        <div className="container">
            <div className="columns">
                <div className="column is-4">
                Search
                </div>
                <div className="column">
                    <div className="box">
                        Search Result
                    </div>
                </div>
            </div>
            <AutoCompleteNew items={['Bedi Dhamaal', 'Bhabi', 'Chaffa', 'Dhamaal Roti Variation', 'End Jumps', 'Faslaan', 'Fast Jhummar', 'Jhummar Variation', 'Pataka', 'Phul Punjab', 'Phulka', 'Phumaniya', 'Punjab', 'Round Bedi', 'Sammi', 'Side Punjab', 'Single Dhamaal', 'Single Dhamaal Variation']} />

        </div>
    );
}

export default SearchContainer;
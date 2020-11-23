import React, {Component} from 'react';
import './App.css';
import AutoCompleteText from './AutoCompleteText.js';
import AutoCompleteNew from './pages/autocompletenew.js';
import { render } from 'react-dom';
import countries from './countries.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className="App-Component">
            <AutoCompleteText items={countries} />
            <br /><br />
            <AutoCompleteText items={['Adam','Peter','Sarah']} />
            <br/>
            <AutoCompleteNew items={countries}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

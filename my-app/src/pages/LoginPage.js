import 'bulma/css/bulma.css';
import './../styles/FirstPage.css';
import React, {Component} from 'react';
import renderLogo from '../logo/logo.js';
import Login from '../components/Login';
import bg from './bg.mp4';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const videosource = 'bg.mp4';
        return <div>
                <video id="myVideo" autoPlay muted>
                    <source src={bg} type='video/mp4' />
                </video>
                <section className="hero is-fullheight">
                    <div className="hero-body logo">
                        <div className="svg-container column is-7">
                            {renderLogo()}
                        </div>
                        <div className="column is-one-third">
                            <Login/>
                        </div>
                    </div>
                </section>
            </div>
    }
}

export default LoginPage;
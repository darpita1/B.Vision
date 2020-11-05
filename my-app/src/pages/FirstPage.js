import 'bulma/css/bulma.css';
import './../styles/FirstPage.css';
import renderLogo from './../logo/logo.js';
import login from '../components/login';
import './bg.mp4';

export default function firstPage() {
    const videosource = 'bg.mp4';
    return <div>
        <section className="hero yellow is-fullheight">
            <div className="hero-body logo">
                <div className="svg-container column is-7">
                    {renderLogo()}
                </div>
                <div className="column is-one-third">
                    {login()}
                </div>
            </div>
        </section>
    </div>
}
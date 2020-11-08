import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        };
    }
    render() {
        return (<div className="login-container">
                <form className="loginform">
                    <h1 className="title">Login</h1>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Username" name="username" onChange={(event,newValue) => this.setState({username:newValue})}></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" name="password" onChange={(event, newValue) => this.setState({password:newValue})}></input>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="button is-dark" value="Create Account" type="submit" onClick={(event) => this.handleClick(event)}/>
                            <input className="button is-dark" type="submit"/>
                        </div>
                    </div>
                </form>
            </div>);
    }

    handleClick() {
        // logic for handling authorization 
    }
}

export default Login;
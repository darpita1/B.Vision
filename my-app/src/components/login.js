import 'bulma/css/bulma.css';
import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);   // only necessary if using a function without () so maybe not necessary in this case
    }
    render() {
        return (<div className="login-container">
                <form className="loginform" onSubmit={this.handleSubmit}>
                    <h1 className="title">Login</h1>
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Username" value={this.state.username} name="username" onChange={(event) => this.setState({username:event.target.value})}></input>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" value={this.state.password} name="password" onChange={(event) => this.setState({password:event.target.value})}></input>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="button is-dark" value="Create Account" type="submit" />
                            <input className="button is-dark" type="submit" onClick={(event) => this.handleSubmit(event)}/>
                        </div>
                    </div>
                </form>
            </div>);
    }

    handleSubmit() {
        // logic for handling authorization
        console.log(this.state);
    }
}

export default Login;
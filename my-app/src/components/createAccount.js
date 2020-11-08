import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../styles/createAccount.css';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            title: '',
            password: '',
            age: ''
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    render() {
        return (<div className="create-account-container container">
        <form className="accountform" onSubmit={this.handleSubmit}>
            <h1 className="title">Create Account</h1>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Name" value={this.state.name} name="name" onChange={(e) => this.setState({name:e.target.value})}></input>
                    {this.state.name}
                </div>
            </div>
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Username" value={this.state.username} name="username" onChange={(e) => this.setState({username:e.target.value})}></input>
                    {this.state.username}
                </div>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <div className="control">
                    <input className="input" type="password" placeholder="Password" value={this.state.password} name="password" onChange={(e) => this.setState({password:e.target.value})}></input>
                    {this.state.password}
                </div>
            </div>
            <div className="field">
                <label className="label">Age</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Age" value={this.state.age} name="age" onChange={(event) => this.setState({age:event.target.value})}></input>
                    {this.state.age}
                </div>
            </div>
            <div className="title-radio">
            <label className="label">Title</label>
                <div className="control">
                    <label className="radio">
                        <input type="radio" name="answer"/>
                             Teacher
                    </label>
                    <label className="radio">
                        <input type="radio" name="answer"/>
                             Student
                    </label>
                    <label className="radio">
                        <input type="radio" name="answer"/>
                             Choreographer
                    </label>
                </div>
            </div>
            <hr/>
            <div className="field">
                <div className="control">
                    <input className="button is-dark" type="submit" onClick={(event) => this.handleSubmit(event)}/>
                </div>
            </div>
        </form>
    </div>)
    }

    handleSubmit() {
        console.log("submit");
    }
}

export default CreateAccount;
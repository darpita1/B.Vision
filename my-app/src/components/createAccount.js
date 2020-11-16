import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../styles/createAccount.css';
<<<<<<< HEAD
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import firebase from 'firebase';

export default function CreateAccount() {
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const[title, setTitle] = useState();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const database = firebase.database();
    const rootRef = database.ref("/");

    function handleRadio(event) {
        //console.log(event.target.value);
        setTitle(event.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault();

        try {
            console.log(usernameRef.current.value);
            console.log(passwordRef.current.value);
            console.log("title:", title);
            setError("");
            setLoading(true);
            let a = await signup(usernameRef.current.value, passwordRef.current.value);
            setData();
            // another function that will handle the data and put it into the database
        } catch {
            setError("Account already exists ");
=======

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            title: '',
            password: '',
            age: ''
>>>>>>> 7363c7d9fa4d18ae2c6f5ea0e95973c4046af2a4
        }
        this.handleSubmit =this.handleSubmit.bind(this);
    }

<<<<<<< HEAD
    function setData() {
        firebase.database().ref('/users/' + usernameRef.current.value).set({
            username: usernameRef.current.value,
            name: nameRef.current.value,
            age: ageRef.current.value,
            title: title
        });
    }

    return (<div className="create-account-container container">
    <form className="accountform" onSubmit={handleSubmit}>
        <h1 className="title">Create Account</h1>
        <div className="field">
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Name" ref={nameRef} name="name"></input>
=======
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
>>>>>>> 7363c7d9fa4d18ae2c6f5ea0e95973c4046af2a4
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
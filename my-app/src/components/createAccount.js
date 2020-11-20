import 'bulma/css/bulma.css';
import '../styles/createAccount.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory} from "react-router-dom";
import database from '../firebase.js';

export default function CreateAccount() {
    
    const usernameRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const ageRef = useRef();
    const[title, setTitle] = useState();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();


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
            await signup(usernameRef.current.value, passwordRef.current.value);
            history.push('/profile');
            setData(); // SETDATA IS NOT WORKING!

        } catch {
            setError("Account already exists ");
        }
        
        setLoading(false);
    }

    function setData() {
        console.log("entered set data");
        database.ref('users/' + usernameRef.current.value).push({
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
            </div>
        </div>
        <div className="field">
            <label className="label">Email Address</label>
            <div className="control">
                <input className="input" type="text" placeholder="Username" ref={usernameRef} name="username"></input>
            </div>
        </div>
        <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input className="input" type="password" placeholder="Password" ref={passwordRef} name="password"></input>
            </div>
        </div>
        <div className="field">
            <label className="label">Age</label>
            <div className="control">
                <input className="input" type="text" placeholder="Age" ref={ageRef} name="age"></input>
            </div>
        </div>
        <div className="title-radio">
        <label className="label">Title</label>
            <div className="control" onChange={handleRadio}>
                <label className="radio">
                    <input type="radio" name="answer" value="Teacher"/>
                            Teacher
                </label>
                <label className="radio">
                    <input type="radio" name="answer" value="Student"/>
                            Student
                </label>
                <label className="radio">
                    <input type="radio" name="answer" value="Choreographer"/>
                            Choreographer
                </label>
            </div>
        </div>
        <br/>
        {error && <h2>{error}</h2>}
        <div className="field">
            <div className="control">
                <input className="button is-dark" type="submit" disabled={loading}/>
            </div>
        </div>
    </form>
    <hr/>
    <div>
        Already have an Account? <Link to="/login">Log In</Link>
    </div>
</div>);
}
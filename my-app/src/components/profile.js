import React, { useState, useRef } from 'react';
import 'bulma/css/bulma.css';
import '../styles/profile.css';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

function Profile() {

    const { currentUser, logout } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [editBool, toggleEdit] = useState(false);

    const nameRef = useRef();
    const ageRef = useRef();
    const[title, setTitle] = useState();

    function toggle() {
        toggleEdit(!editBool);
    }

    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push('/login');
        } catch {}
        setError('Failed to log out');
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    async function readData() {
        if (!loading) {
            const username = getUsername(currentUser.email);
        const result = await axios({
            method: 'get',
            url: `https://b-vision-18af8.firebaseio.com/users/${username}.json`,
        }).then((x) => setUserInfo(x.data));
        setLoading(true);
        }   

        console.log("render");
    }

    async function updateInfo(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://b-vision-18af8.firebaseio.com/users/${toupdate}/.json`,
            data: obj
        });
    }
    
    async function updateAll() {
        let username = getUsername(currentUser.email);
        await updateInfo(username, "name", nameRef.current.value);
        await updateInfo(username, "age", ageRef.current.value);
        await updateInfo(username, "title", title);
        userInfo.name = nameRef.current.value;
        userInfo.age = nameRef.current.value;
        userInfo.title = title;
        toggle();
        console.log("done updating");
    }

    function handleRadio(event) {
        setTitle(event.target.value);
    }

    function renderModal() {
        return (<div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Edit Profile</p>
                </header>
                <section className="modal-card-body">
                    <br />
                    <h2>Name: </h2>
                    <input type="text" className="input" name="name" ref={nameRef} rows="1"></input>
                    <h2>Age: </h2>
                    <input type="text" className="input" name="age" ref={ageRef}/>
                    <div className="title-radio">
                    <h2>Title</h2>
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
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-info" type="submit" onClick={updateAll}>Update</button>
                </footer>
            </div>
        </div>);
    }
    readData();

    function renderData() {
        return (
            <div className="column is-6">
                <h2 className="title is-2">{userInfo.name}</h2>
                <h2 className="subtitle is-4">Email: {currentUser.email}</h2>
                <h4 className="subtitle is-4">Title: {userInfo.title}</h4>
                <a onClick={toggle}>Edit</a>
            </div>);
    }

    if (!userInfo) { return <h2>Loading</h2>; }
    else {
        return (
            <div className="profile container">
                <input className="logout button is-dark" value="Logout" type="submit" onClick={handleLogout} readOnly />
                <h1 className="title is-1">Profile</h1>
                <div className="profile-info columns">
                    <div className="column is-4">
                        <img className="profile-pic" src="https://www-nomadcruise-com.exactdn.com/wp-content/uploads/22-223930_avatar-person-neutral-man-blank-face-buddy-facebook.png" alt="Profile pic" height="200px" width="200px"></img>
                    </div>
                    {editBool ? renderModal() : renderData() }
                </div>
                <Link to="/makevideo">
                    <input className="button is-dark" value="Make Video"/>
                </Link>
                <div className="video-container">
                    <h2 className="title is-2">Videos</h2>
                    <div className="inner-container">   
                    {JSON.stringify(currentUser)}
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;
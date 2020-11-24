import React, { useState, useRef } from 'react';
import 'bulma/css/bulma.css';
import '../styles/profile.css';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Uservideos from './uservideos.js';



function Profile() {

    const { currentUser, logout } = useAuth();
    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [editBool, toggleEdit] = useState(false);
    const [showVids, setShowVids] = useState(false);

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
            withCredientials: true
        }).then((x) => setUserInfo(x.data));
        setLoading(!loading);
        console.log("userInfo", userInfo);
        }   

        //console.log(editBool);
    }

    async function updateInfo(toupdate, param, value) {
        const obj = {};
        obj[`${param}`] = value;
        const result = await axios({
            method: 'patch',
            url: `https://b-vision-18af8.firebaseio.com/users/${toupdate}/.json`,
            withCredientials: true,
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
            <div className="center info box">
                <h2 className="prof name font">{userInfo.name}</h2>
                <h2 className="prof font">{currentUser.email}</h2>
                <h4 className="prof font titles">{userInfo.title}</h4>
            </div>);
    }
    function toggleShow() {
        setShowVids(!showVids);
    }

    if (!userInfo) { return <h2>Please refresh the page in a few seconds</h2>; }
    else {
        return (
            <div className="profile container">
                <div className="profile-info container">
                    <div className="is-flex is-horizontal-center">
                        <img className="profile-pic center" src="https://i.pinimg.com/474x/80/d3/47/80d3478d984cf0a539f8805f32ee15b7.jpg" alt="Profile pic" height="150px" width="150px"></img>
                    </div>
                    <br/>
                    {editBool ? renderModal() : renderData() }
                </div>
                <br/>
                <div className= "center info box">
                    <h4 className="prof">Welcome to your B.Vision profile page!</h4>
                    <h4 className="prof">Use the buttons below to navigate!</h4>
                </div>
                
                <div className="columns buttons">
                    <Link to="/makevideo">
                        <a className="button is-dark" value="Make Video">Make Video</a>
                    </Link>
                    <a className="button is-dark" value="See My Video" onClick={toggleShow}>See My Videos</a>
                    <a className="button is-dark" value="Edit" onClick={toggle}>Edit Profile</a>
                    <a className="logout button is-dark" value="Logout" type="submit" onClick={handleLogout} readOnly>Logout</a>
                </div> 
                    <div className="video-container">
                    {showVids ? <Uservideos username={getUsername(currentUser.email)} /> : null}
            </div>
        </div>
        );
    }
}

export default Profile;
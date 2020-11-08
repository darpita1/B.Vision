import React from 'react';


function Profile(props) {
    return (
        <div className="profile">
            <h1>Picture</h1>
            <h1>{props.name}</h1>
            <h1>{props.title}</h1>
            <h1>Videos</h1>

        </div>
    );
}

export default Profile
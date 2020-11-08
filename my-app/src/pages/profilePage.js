import React from 'react';
import Profile from '../components/profile.js';

function ProfilePage() {
    
    return (
        <div className="profilepage">
            <Profile name="John Doe" title="instructor" />
        </div>
    );

}

export default ProfilePage;
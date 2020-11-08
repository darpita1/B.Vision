import React from 'react';
import Profile from '../components/profile.js';

function ProfilePage() {
    
    return (
        <section className="profile-section section">
            <Profile name="John Doe" title="instructor" />
        </section>
    );

}

export default ProfilePage;
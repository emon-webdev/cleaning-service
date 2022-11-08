import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Profile : {user.name}</h2>
        </div>
    );
};

export default Profile;
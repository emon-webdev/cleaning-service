import React from 'react';

const PrivateRoute = ({children}) => {
    return (
        <div>
            <h2>Private Route</h2>
            {children}
        </div>
    );
};

export default PrivateRoute;
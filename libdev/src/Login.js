import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

function Login() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        ! isAuthenticated &&
        <div className="login-page">
            <button onClick={() => loginWithRedirect()}>
                Log in
            </button>
        </div>
    )
}

export default Login

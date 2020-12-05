import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

function Login() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();


    return (
        ! isAuthenticated &&
        <div>
            <button onClick={() => loginWithRedirect({screen_hint: "signup"})}>
                Log in
            </button>
        </div>
    )
}

export default Login

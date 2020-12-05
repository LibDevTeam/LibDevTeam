import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading3 } from "./LoadingComponents";

const ProtectedRoute = ({ children, ...args }) => (
    <Route
        component={withAuthenticationRequired(children, {
            onRedirecting: () => <div>Redirecting you to the login...</div>,
        })}
        {...args}
    />
);

export default ProtectedRoute;
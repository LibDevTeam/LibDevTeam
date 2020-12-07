import React, { useContext } from 'react';
import './MyAccount.css';
import { Switch, Route } from 'react-router-dom';
import Wishlist from './Wishlist';
import Orders from './Orders';
import { useAuth0 } from '@auth0/auth0-react';
import { GlobalContext } from './GlobalState';

function MyAccount() {
    const { logout, user } = useAuth0();
    const { user_data } = useContext(GlobalContext);
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="side-nav-bar">
                        <div>
                            <div className="navbar-div1">
                                <div className="welcome-container">
                                    { user_data[0] && 
                                        <img
                                            alt={user_data[0].properties.name}
                                            className="profile-pic"
                                            src={user.picture}
                                        />
                                    }
                                    { !user_data[0] && 
                                        <img
                                            alt="User name"
                                            className="profile-pic"
                                            src="https://i.stack.imgur.com/l60Hf.png"
                                        />
                                    }
                                    <div className="profile-name-container">
                                        <div className="welcome-box">Hello,</div>
                                        { user_data[0] && <div className="profile-name">{user_data[0].properties.name}</div>}
                                        { !user_data[0] && <div className="profile-name">User Name</div>}
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-div2">
                                <div className="navigate">
                                    <a href="/account">
                                        <div>Account Details</div>
                                    </a>
                                </div>
                                <div className="navigate">
                                    <a href="/account/cards">
                                        <div>Card Details</div>
                                    </a>
                                </div>
                                <div className="navigate">
                                    <a href="/account/orders">
                                        <div>Orders</div>
                                    </a>
                                </div>
                                <div className="navigate navigate-wishlist">
                                    <a href="/account/wishlist">
                                        <div>Wishlist</div>
                                    </a>
                                </div>
                                <div className="navigate logout" onClick={() => logout({returnTo: window.location.origin, client_id: clientId})}>
                                    <div>
                                        <i class="fa fa-power-off" aria-hidden="true"></i> Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-content">
                        <Switch>
                            <Route exact path="/account">
                                <div>Profile Info</div>
                            </Route>
                            <Route path="/account/wishlist">
                                <Wishlist/>
                            </Route>
                            <Route path="/account/orders">
                                <Orders/>
                            </Route>
                            <Route path="/account/cards">
                                <div>Cards</div>
                            </Route>
                            <Route>
                                <div>Page Not Found</div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount

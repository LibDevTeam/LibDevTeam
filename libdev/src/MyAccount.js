import React from 'react';
import './MyAccount.css';
import { Switch, Route } from 'react-router-dom';
import Wishlist from './Wishlist';

function MyAccount() {
    return (
        <div className="content-wrap" style={{transform: "none"}}>
            <div className="container" style={{transform: "none"}}>
                <div className="main-area disable-right-sidebar" style={{transform: "none"}}>
                    <div className="side-nav-bar">
                        <div>
                            <div className="navbar-div1">
                                <div className="welcome-container">
                                    <img
                                        className="profile-pic"
                                        src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                                    />
                                    <div className="profile-name-container">
                                        <div className="welcome-box">Hello,</div>
                                        <div className="profile-name">USERNAME</div>
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
                                <div className="navigate logout-button">
                                    <a>
                                        <div><i class="fa fa-power-off" aria-hidden="true"></i> Logout</div>
                                    </a>
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
                                <div>Orders</div>
                            </Route>
                            <Route path="/account/cards">
                                <div>Cards</div>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount

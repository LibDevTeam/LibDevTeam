import React, { useState } from 'react';
import './Header(Main).css';
import './Header(Sticky).css';
import './Header(Below).css';
import { Redirect, useHistory, NavLink } from 'react-router-dom';

function Header({props}) {
    const [query, setQuery] = useState('');
    const history = useHistory();
    // console.log(query);

    const formSubmitHandle = (e) => {
        // e.preventDefault();
        // console.log('hi');
        console.log(query);
        history.push({pathname: '/search',query});
    }

    return (
        <div>
            <a href="/" className="skip-link screen-reader-text">Skip to content</a>
            <div className="sticky-header">
                <div className="container">
                    <div className="sticky-header-bar thnk-col-3">
                        <div className="sticky-header-col1">
                            <span className="logo-content">
                                <div className="thunk-logo">
                                    <a 
                                        className="custom-logo-link"
                                        href="/"
                                        rel="home"
                                    >
                                        <img
                                            width="700"
                                            height="200"
                                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_043837.png"
                                            className="custom-logo"
                                            alt="Library"
                                        />
                                    </a>
                                </div>
                            </span>
                        </div>
                        <div className="sticky-header-col2">
                            <nav>
                                <div className="menu-toggle" style={{display: "none"}}>
                                    <button type="button" className="menu-btn" id="menu-btn-stk">
                                        <div className="btn">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                    </button>
                                </div>
                                <div className="sider main top-store-menu-hide left">
                                    <div className="sider-inner">
                                        <ul id="top-store-stick-menu" className="top-store-menu" data-style-menu="horizontal">
                                            <li>
                                                <a href="/account/orders">
                                                    <span className="top-store-menu-link">My orders</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/all-category">
                                                    <span className="top-store-menu-link">All Category</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">Preferences</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">Contact us</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="sticky-header-col3">
                            <div className="thunk-icon">
                                <div className="header-icon">
                                    <a className="prd-search" href="#">
                                        <i className="fa fa-search"></i>
                                    </a>
                                    <a className="wishlist" href="/account/wishlist">
                                        <i className="fa fa-heart-o"></i>
                                    </a>
                                    <span>
                                        <a href="/account" className="myaccount-hover">
                                            <span className="account-text">Login / Signup</span>
                                            <span className="account-text">My account</span>
                                            <i className="fa fa-lock" aria-hidden="true"></i>
                                            <div className="account-dropdown">
                                                <div className="clip"></div>
                                                <a href="/account">My Account</a>
                                                <a href="/account/cards">Card Details</a>
                                                <a href="/account/wishlist">My Wishlist</a>
                                                <a href="/account/orders">Orders</a>
                                                <a href="/">Logout</a>
                                            </div>
                                        </a>
                                    </span>
                                    <div className="cart-icon">
                                        <a className="cart-contents" href="\pending" title="See your orders">
                                            <i className="fa fa-shopping-basket"></i>
                                            <span className="cart-content">
                                                <span className="count-item">1</span>
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        <span className="woocommerce-Price-currencySymbol">₹</span>
                                                        675.00
                                                    </bdi>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="main-header mhdrfour none left cnv-none">
                <div className="container">
                    <div className="main-header-bar thnk-col-3">
                        <div className="main-header-col1">
                            <span className="logo-content">
                                <div className="thunk-logo">
                                    <a href="\" className="custom-logo-link" rel="home">
                                        <img
                                            width="700"
                                            height="200"
                                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_043837.png"
                                            className="custom-logo"
                                            alt="Library"
                                        />
                                    </a>
                                </div>
                            </span>
                        </div>
                        <div className="main-header-col2">
                            <div id="search-box" className="wow thmkfadeInDown">
                                <form onSubmit={formSubmitHandle} id="search-form" className="woocommerce-product-search">
                                    <input
                                        id="search-text"
                                        name="q"
                                        value={query}
                                        placeholder="Search for books"
                                        className="form-control search-autocomplete ui-autocomplete-input"
                                        type="text"
                                        autoComplete="off"
                                        title="Search for:"
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <div className="vert-brd"></div>
                                    <select name="subject" id="product_cat" className="something">
                                        <option value="all" selected="selected">All Category</option>
                                        <option className="level-0" value="1">Category 1</option>
                                        <option className="level-0" value="2">Category 2</option>
                                        <option className="level-0" value="3">Category 3</option>
                                        <option className="level-0" value="4">Category 4</option>
                                    </select>
                                    <button id="search-button" value="Submit" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                    <input
                                        type="hidden"
                                        name="post_type"
                                        value="product"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="main-header-col3">
                            <div className="thunk-icon-market">
                                <div className="header-icon">
                                    <a className="wishlist" href="/account/wishlist">
                                        <span className="th-wishlist-text">My Favourite</span>
                                        <span>Wishlist</span>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </a>
                                    <a className="myaccount-hover">
                                        <span className="account-text">Login / SignUp</span>
                                        <span className="account-text">My account</span>
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                        <div className="account-dropdown">
                                            <div className="clip"></div>
                                            <a href="/account">My Account</a>
                                            <a href="/account/cards">Card Details</a>
                                            <a href="/account/wishlist">My Wishlist</a>
                                            <a href="/account/orders">Orders</a>
                                            <a href="/">Logout</a>
                                        </div>
                                    </a>
                                </div>
                                <div className="cart-icon">
                                    <a className="cart-contents" href="\pending" title="Check your orders">
                                        <i className="fa fa-shopping-basket"></i>
                                        <span className="cart-content">
                                            <span className="count-item">0</span>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                <span className="woocommerce-Price-currencySymbol">₹</span>
                                                0.00
                                                </bdi>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="below-header mhdrfour left none">
                <div className="container">
                    <div className="below-header-bar thnk-col-3">
                        <div className="below-header-col1">
                            <div className="menu-category-list">
                                <div className="toggle-cat-wrap">
                                    <p className="cat-toggle" tabIndex="0">
                                        <span className="cat-icon">
                                            <span className="cat-top"></span>
                                            <span className="cat-top"></span>
                                            <span className="cat-bot"></span>
                                        </span>
                                        <span className="toggle-title">Category</span>
                                        <span className="toggle-icon"></span>
                                    </p>
                                </div>
                                <ul className="product-cat-list thunk-product-cat-list" style={{display: "none"}}>
                                    <li className="cat-item cat-item-63">
                                        <a href="/">Fiction</a>
                                    </li>
                                </ul>
                            </div>
                            <nav>
                                <div className="menu-toggle" style={{display: "none"}}>
                                    <button type="button" className="menu-btn" id="menu-btn">
                                        <div className="btn">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                        <span className="icon-text">Menu</span>
                                    </button>
                                </div>
                                <div className="sider main top-store-menu-hide left">
                                    <div className="menu-close">
                                        <span tabIndex="0" className="menu-close-btn"></span>
                                    </div>
                                    <div className="sider-inner">
                                        <ul id="top-store-menu" className="top-store-menu">
                                            <li>
                                                <a href="/" aria-current="page">
                                                    <span className="top-store-menu-link">Home</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/account/orders">
                                                    <span className="top-store-menu-link">My orders</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/all-category">
                                                    <span className="top-store-menu-link">All Category</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <span className="top-store-menu-link">Preferences</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/contact-us">
                                                    <span className="top-store-menu-link">Contact Us</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

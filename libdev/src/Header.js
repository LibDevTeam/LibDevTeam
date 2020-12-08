import React, { useState, useEffect, useRef } from 'react';
import './Header(Main).css';
import './Header(Sticky).css';
import './Header(Below).css';
import { MenuItem, MenuList } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import { useStateValue } from './StateProvider';
import $ from 'jquery';

function addToPlaceholder(toAdd, el) {
    el.attr('placeholder', el.attr('placeholder') + toAdd);
    return new Promise(resolve => setTimeout(resolve, 100));
}

function clearPlaceholder(el) {
    el.attr("placeholder","");
}

function printPhrase(phrase, el) {
    return new Promise(resolve => {
        clearPlaceholder(el);
        let letters = phrase.split('');
        letters.reduce((promise, letter, index) => promise.then(_ => {
            if(index === letters.length -1) {
                setTimeout(resolve, 1000);
            }
            return addToPlaceholder(letter,el);
        }),
        Promise.resolve()
        );
    });
}

function printPhrases(phrases, el) {
    phrases.reduce((promise, phrase) => promise.then(_ => printPhrase(phrase, el)),
    Promise.resolve()
    );
}

function run() {
    let phrases = ["Search by book title", "Search by authors", "Search by publishers", "Search by ISBN numbers", "Search your books"];
    printPhrases(phrases, $('#search-text'));
}

function Header() {
    const { logout, user } = useAuth0();
    const node = useRef();
    const [query, setQuery] = useState('');
    const [subject,setSubject] = useState('all');
    const [debouncedValue,setDebouncedValue] = useState('');
    const [delay,setDelay] = useState(500);
    const [books,setBooks] = useState([]);
    const [bookLoading,setBookLoading] = useState(false);
    const [openBox,setOpenBox] = useState(false);
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const [{ user_data }] = useStateValue();
    
    useEffect(() => {
        window.addEventListener("mousedown",handleClick);
        run();
        return () => window.removeEventListener("mousedown",handleClick);
    },[])

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/v1/get/search?q=${debouncedValue}&subject=all&page=1&per=10`)
            .then(response => response.json())
            .then(apiData => {
                setBooks([...apiData]);
                setBookLoading(false);
            })
        }
        if(debouncedValue.length > 2) {
            setOpenBox(true);
            setBookLoading(true);
            fetchData();
        }
    }, [debouncedValue])

    useEffect(() => {
        if(query.length <3) setOpenBox(false);
        const handler = setTimeout(() => {
            setDebouncedValue(query);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [delay,query])

    const handleClick = (e) => {
        if(node.current && !node.current.contains(e.target) && e.target.id !== 'search-text') {
            setOpenBox(false);
        }
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
                                                <a href="/preference">
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
                                            {/* <span className="account-text">My account</span>
                                            <span className="account-text">My account</span> */}
                                            {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
                                            {   !user_data[0] &&
                                                <img
                                                    alt="profile-pic"
                                                    src="https://i.stack.imgur.com/l60Hf.png"
                                                    style={{width: '25px', height: '25px', borderRadius: '50%', marginTop: '3.5px'}}
                                                />
                                            }
                                            {   user_data[0] &&
                                                <img
                                                    alt={user_data[0].properties.name}
                                                    src={user.picture}
                                                    style={{width: '25px', height: '25px', borderRadius: '50%', marginTop: '3.5px'}}
                                                />
                                            }
                                            <div className="account-dropdown">
                                                <div className="clip"></div>
                                                <a href="/account">My Account</a>
                                                <a href="/account/cards">Card Details</a>
                                                <a href="/account/wishlist">My Wishlist</a>
                                                <a href="/account/orders">Orders</a>
                                                {/* <div className="logout" onClick={() => logout({returnTo: window.location.origin, client_id: clientId})}>Logout</div> */}
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
                                <form action="/search" id="search-form" className="woocommerce-product-search">
                                    <input
                                        list="options"
                                        id="search-text"
                                        name="q"
                                        value={query}
                                        className="form-control search-autocomplete ui-autocomplete-input"
                                        type="text"
                                        autoComplete="off"
                                        title="Search for:"
                                        required
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    {   openBox && books.length !== 0 &&
                                            <MenuList ref={node} className="autocomplete-ul">
                                                {bookLoading && <div className="autocomplete-li" style={{width: '280px'}}>Loading...<i className="fa fa-spin fa-spinner"></i></div>}
                                                {!bookLoading && books.length !== 0 &&
                                                    books.map((book,index) => 
                                                        <MenuItem className="autocomplete-li">
                                                            <a href={`/book/${book._fields[0].identity.low}`}>{book._fields[0].properties.Name}</a>
                                                        </MenuItem>
                                                    )
                                                }
                                            </MenuList>
                                    }
                                    <div className="vert-brd"></div>
                                    <select name="subject" id="product_cat" className="something">
                                        <option value="all" selected="selected">All Category</option>
                                        {
                                            user_data[1] && 
                                            user_data[1].map(category => 
                                                <option className="level-0" value={category.identity.low}>{category.properties.name}</option>
                                        )}
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
                                    <a href="/" className="myaccount-hover">
                                        {/* <span className="account-text">Login / SignUp</span> */}
                                        {/* <i className="fa fa-lock" aria-hidden="true"></i> */}
                                        {   !user_data[0] && 
                                            <img
                                                alt="profile-pic"
                                                src="https://i.stack.imgur.com/l60Hf.png"
                                                style={{width: '35px', height: '35px', borderRadius: '50%', marginBottom: '-10px', marginTop: '4px'}}
                                            />
                                        }
                                        {   user_data[0] && 
                                            <img
                                                alt={user_data[0].properties.name}
                                                src={user.picture}
                                                style={{width: '35px', height: '35px', borderRadius: '50%', marginBottom: '-10px', marginTop: '4px'}}
                                            />
                                        }
                                        {/* <span className="account-text">My account</span> */}
                                        <div className="account-dropdown">
                                            <div className="clip"></div>
                                            <a href="/account">My Account</a>
                                            <a href="/account/cards">Card Details</a>
                                            <a href="/account/wishlist">My Wishlist</a>
                                            <a href="/account/orders">Orders</a>
                                            <div className="logout" onClick={() => logout({returnTo: window.location.origin, client_id: clientId})}>Logout</div>
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
                                                <a href="/preference">
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

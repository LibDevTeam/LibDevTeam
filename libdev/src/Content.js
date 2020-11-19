import React from 'react';
import './Footer.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import BookDeatils from './BookDeatils';
import AllCategory from './AllCategory';
import SubjectDetail from './SubjectDetail';
import MyAccount from './MyAccount';

function Content() {
    return (
        <div id="content" className="front" style={{trnasform: "none"}}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/book-details">
                    <BookDeatils/>
                </Route>
                <Route path="/all-category">
                    <AllCategory/>
                </Route>
                <Route path="/subject">
                    <SubjectDetail/>
                </Route>
                <Route path="/account">
                    <MyAccount/>
                </Route>
                <Route>
                    <div>Page Not Found</div>
                </Route>
            </Switch>
        </div>
    )
}

export default Content

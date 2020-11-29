import React from 'react';
import './Footer.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BookDeatils from './BookDeatils';
import AllCategory from './AllCategory';
import SubjectDetail from './SubjectDetail';
import MyAccount from './MyAccount';
import PendingBooks from './PendingBooks';
import Search from './Search';

function Content() {
    return (
        <div id="content" className="front" style={{trnasform: "none"}}>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/book/:bookId">
                    <BookDeatils/>
                </Route>
                <Route path="/all-category">
                    <AllCategory/>
                </Route>
                <Route path="/subject/:subjectId">
                    <SubjectDetail/>
                </Route>
                <Route path="/account">
                    <MyAccount/>
                </Route>
                <Route path="/pending">
                    <PendingBooks/>
                </Route>
                <Route>
                    <div>Page Not Found</div>
                </Route>
            </Switch>
        </div>
    )
}

export default Content

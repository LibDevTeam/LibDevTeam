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
import { Loading2 } from './LoadingComponents';
import ProtectedRoute from './protected-route';

function Content() {
    return (
        <div id="content" className="front" style={{trnasform: "none"}}>
            <Switch>
                <ProtectedRoute exact path="/" component={Home}/>
                <ProtectedRoute path="/loading" component={Loading2}/>
                <ProtectedRoute path="/search" component={Search}/>
                <ProtectedRoute path="/book/:bookId" component={BookDeatils}/>
                <ProtectedRoute path="/all-category" component={AllCategory}/>
                <ProtectedRoute path="/subject/:subjectId" component={SubjectDetail}/>
                <ProtectedRoute path="/account" component={MyAccount}/>
                <ProtectedRoute path="/pending" component={PendingBooks}/>
                <Route>
                    <div>Page Not Found</div>
                </Route>
            </Switch>
        </div>
    )
}

export default Content

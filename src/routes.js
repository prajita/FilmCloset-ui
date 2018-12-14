import React from "react";
import { Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import MovieContainer from './containers/MovieContainer';
import history from './history';

export default (
    <Router history={history} >
        <div>
            <Route exact path="/" component={Dashboard} >
            </Route>
            <Route path="/movie/:id" component={MovieContainer} />
        </div>
    </Router>


)
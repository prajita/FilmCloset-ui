import React from "react";
import { Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import history from './history';

export default (
    <Router history={history} >
        <div>
            <Route exact path="/" component={Dashboard} />
        </div>
    </Router>


)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import profileTest from '../pages/ProfileTest';


class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile/:username" component={Profile} />
                    <Route exact path="/profiletest" component={profileTest} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import YoutubeViewcount from '../components/YoutubeViewcount'

class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile/:username" component={Profile} />
                    <Route exact path="/video/:youtubevideo" component={YoutubeViewcount} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;
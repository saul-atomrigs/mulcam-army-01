import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Wordcloud from '../components/Wordcloud/Example.tsx'


class Routes extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile/:username" component={Profile} />
                    <Route exact path="/wordcloud" component={Wordcloud} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;
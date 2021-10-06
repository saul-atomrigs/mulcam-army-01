import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import BlackpinkJisoo from '../pages/blackpink'
import BtsJimin from '../pages/bts'
import TwiceSana from '../pages/twice'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/blackpink/jisoo" component={BlackpinkJisoo} />
                    <Route exact path="/bts/jimin" component={BtsJimin} />
                    <Route exact path="/twice/sana" component={TwiceSana} />
                </Switch>
            </Router>
        )
    }
}
export default Routes;
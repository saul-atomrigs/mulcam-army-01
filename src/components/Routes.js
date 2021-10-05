import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import BlackpinkJisoo from '../pages/BlackpinkJisoo'
import BtsJimin from '../pages/BtsJimin'
import TwiceSana from '../pages/TwiceSana'

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
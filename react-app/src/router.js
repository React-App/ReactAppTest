import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './routes/App/App'
import Home from './routes/Home/Home'

const history = createBrowserHistory()

class RouterRoot extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/Home" component={Home}/>
                </div>
            </Router>
        );
    }
}

export default RouterRoot;
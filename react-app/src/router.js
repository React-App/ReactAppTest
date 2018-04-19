import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './routes/App/App'
import Home from './routes/Home/Home'
import Carousel from './routes/Test/Carousel'
import AppTabs from './routes/Test/AppTabs'


const history = createBrowserHistory()

class RouterRoot extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Carousel" component={Carousel}/>
                    <Route path="/AppTabs" component={AppTabs}/>
                </div>
            </Router>
        );
    }
}

export default RouterRoot;
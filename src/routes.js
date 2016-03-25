import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import AppContainer from './containers/AppContainer'
import Root from './containers/Root'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {Root}>
            <Route path="/counter" Component = "" />
            <Route path="/articles" Component = {AppContainer} />
        </Route>
    </Router>
)
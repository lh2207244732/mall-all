import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { getUsername } from './util'


import Login from './pages/Login'
import Home from './pages/Home'

const ProtectRoute = ({ component: Component, ...rest }) => <Route {...rest} render={() => (getUsername() ? <Component /> : <Redirect to="/login" />)} />

const LoginRoute = ({ component: Component, ...rest }) => <Route {...rest} render={() => (getUsername() ? <Redirect to="/" /> : <Component />)} />


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <ProtectRoute exact path="/" component={Home} />
                    <LoginRoute path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}
export default App
import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { getUsername } from './util'

import NotFound from './components/Notfound'
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import Category from './pages/Category'


const ProtectRoute = ({ component: Component, ...rest }) => <Route {...rest} render={() => (getUsername() ? <Component /> : <Redirect to="/login" />)} />

const LoginRoute = ({ component: Component, ...rest }) => <Route {...rest} render={() => (getUsername() ? <Redirect to="/" /> : <Component />)} />


class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <ProtectRoute exact path="/" component={Home} />
                    <ProtectRoute path="/user" component={User} />
                    <ProtectRoute path="/category" component={Category} />
                    <LoginRoute path="/login" component={Login} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        )
    }
}
export default App
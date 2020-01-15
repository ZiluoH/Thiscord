import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import LoginFormContainer from './session_form/session_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomepageContainer from '../homepage/homepage_container';

const App = () => (
    <div className="app">
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/" component={HomepageContainer} />
        </Switch>
 
    </div>
);

export default App;
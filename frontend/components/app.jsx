import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import LoginFormContainer from './session_form/session_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomepageContainer from '../homepage/homepage_container';
import ChannelsIndexContainer from '../components/channels/channels_index_container';
import ServersListContainer from "./servers/servers_index_container";
import Chatroomcontainer from "./chat/chatroom_container";

const App = () => (
    <div className="app">
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/" component={ServersListContainer} />
            <ProtectedRoute path="/channels/:serverId" component={ChannelsIndexContainer}/>
        <ProtectedRoute path="/channels/:serverId/:channelId" component={Chatroomcontainer}/>
    </div>
);

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/session_form_container';
import ServersListContainer from '../components/servers/servers_index_container';
import ChannelsListContainer from '../components/channels/channels_index_container';

const Homepage = ({ currentUser, logout, ownProps}) => {

    const sessionLinks = () => (
        <LoginFormContainer />
    );

    const userHomepage = () => (
        <div className="user-homepage">
            <ServersListContainer />
            <ChannelsListContainer />
        </div>
    );

    

    return currentUser ? userHomepage() : sessionLinks();
}

export default Homepage;
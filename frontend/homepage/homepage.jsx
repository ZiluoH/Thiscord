import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../components/session_form/session_form_container';


const Homepage = ({ currentUser, logout}) => {
    const sessionLinks = () => (
        <LoginFormContainer />
    );

    const userHomepage = () => (
        <div>
            <h3>Yooooo, {currentUser.username} is here!!!</h3>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    return currentUser ? userHomepage() : sessionLinks();
}

export default Homepage;
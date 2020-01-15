import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import ReactModal from 'react-modal';



document.addEventListener("DOMContentLoaded", () => {
    
    ReactModal.setAppElement('#root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: window.currentUser 
            }
        };
        store = configureStore(preloadedState);
        
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} /> , root);
});
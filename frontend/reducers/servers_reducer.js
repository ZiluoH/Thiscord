import { RECEIVE_SERVERS,
        RECEIVE_SERVER,
        RECEIVE_SERVER_MEMBERSHIP
        } from '../actions/servers_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const serversReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_SERVERS:
            return Object.assign({}, oldState, action.servers);
        case RECEIVE_SERVER:
            return Object.assign({}, action.server);
        case RECEIVE_SERVER_MEMBERSHIP:
            return Object.assign({}, action.server_membership);
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default serversReducer;
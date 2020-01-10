import { RECEIVE_SERVERS } from '../actions/servers_actions';

const serversReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_SERVERS:
            return Object.assign({}, state, action.servers.JoinedServer);
        default:
            return state;
    }
}

export default serversReducer;
import {
    RECEIVE_SERVER_ERROR,
    RECEIVE_SERVER,
    CLEAR_SERVER_ERROR,
    RECEIVE_SERVER_MEMBERSHIP_ERROR
} from '../actions/servers_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVER_ERROR:
            return action.error;
        case RECEIVE_SERVER_MEMBERSHIP_ERROR:
            return action.error;
        case RECEIVE_SERVER:
            return [];
        case CLEAR_SERVER_ERROR:
            return [];
        default:
            return state;
    }
};
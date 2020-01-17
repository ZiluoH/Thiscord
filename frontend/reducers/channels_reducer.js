import { RECEIVE_CHANNELS, RECEIVE_CHANNEL } from '../actions/channels_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const channelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            return Object.assign({}, action.channel)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default channelsReducer;
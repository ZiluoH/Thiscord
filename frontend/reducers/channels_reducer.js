import { RECEIVE_CHANNELS } from '../actions/channels_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';


const channelsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CHANNELS:
            return action.channels;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}

export default channelsReducer;
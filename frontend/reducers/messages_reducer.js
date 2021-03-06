import {RECEIVE_MESSAGES, RECEIVE_MESSAGE} from '../actions/messages_actions';

const messagesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            return Object.assign({}, action.message)
        default:
            return oldState;
    }
}

export default messagesReducer;
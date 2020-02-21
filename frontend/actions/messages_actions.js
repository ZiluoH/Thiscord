import * as MessagesAPIUtil from '../utils/messages_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
});

const receiveMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
});

export const fetchMessages = (serverId, channelId) => dispatch => (
    MessagesAPIUtil.fetchMessages(serverId, channelId).then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

export const createMessage = (message) => dispatch => (
    MessagesAPIUtil.createMessage(message).then(message => (
        dispatch(receiveMessage(message))
    ))
);
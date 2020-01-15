import * as ServersAPIUtil from '../utils/servers_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const RECEIVE_SERVER_MEMBERSHIP = 'RECEIVE_SERVER_MEMBERSHIP';
export const RECEIVE_SERVER_ERROR = 'RECEIVE_SERVER_ERROR';
export const RECEIVE_SERVER_MEMBERSHIP_ERROR = 'RECEIVE_SERVER_MEMBERSHIP_ERROR';
export const CLEAR_SERVER_ERROR = 'CLEAR_SERVER_ERROR';



const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
});

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

const receiveServerMembership = server_membership => ({
    type: RECEIVE_SERVER_MEMBERSHIP,
    server_membership
})

const receiveServerError = error => ({
    type: RECEIVE_SERVER_ERROR,
    error
})

const receiveServerMembershipError = error => ({
    type: RECEIVE_SERVER_MEMBERSHIP_ERROR,
    error
})

export const clearServerError = () => ({
    type: CLEAR_SERVER_ERROR
})

export const fetchServers = () => dispatch => (
    ServersAPIUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);

export const createServer = server => dispatch => (
    ServersAPIUtil.createServer(server)
        .then(server => (dispatch(receiveServer(server))),
            err => (dispatch(receiveServerError(err.responseJSON)))
        )
);

export const createServerMembership = server_membership => dispatch => (
    ServersAPIUtil.joinServer(server_membership)
        .then(server_membership => (dispatch(receiveServerMembership(server_membership))),
            err => (dispatch(receiveServerMembershipError(err.responseJSON)))
        )
);


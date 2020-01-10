import * as ServersAPIUtil from '../utils/servers_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';

export const receiveServers = servers => ({
    type: RECEIVE_SERVERS,
    servers
});

export const fetchServers = () => dispatch => (
    ServersAPIUtil.fetchServers().then(servers => (
        dispatch(receiveServers(servers))
    ))
);
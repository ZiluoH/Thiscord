export const fetchServers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/servers',
    })
);

export const createServer = server => (
    $.ajax({
        url: `api/servers/`,
        method: 'POST',
        data: { server }
    })
);

export const joinServer = server_membership => (
    $.ajax({
        url: `api/server_memberships`,
        method: 'POST',
        data: { server_membership }
    })
)

export const deleteServer = id => (
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${id}`
    })
)
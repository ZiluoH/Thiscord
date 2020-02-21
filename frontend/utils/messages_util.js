export const fetchMessages = (server_id, channel_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${server_id}/channels/${channel_id}/messages`
    })
);

export const createMessage = (message, server_id, channel_id) => (
    $.ajax({
        method: 'POST',
        url: `/api/servers/${server_id}/channels/${channel_id}/messages`,
        data: {message}
    })
);
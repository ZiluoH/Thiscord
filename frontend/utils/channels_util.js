export const fetchChannels = (server_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/servers/${server_id}/channels`
    })
);


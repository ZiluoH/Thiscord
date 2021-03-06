import * as ChannelsAPIUtil from '../utils/channels_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
});

export const remvoeChannel = (serverId, channelId) => ({
    type: REMOVE_CHANNEL,
    serverId,
    channelId
})


export const fetchChannels = serverId => dispatch => (
    ChannelsAPIUtil.fetchChannels(serverId).then(channels => (
        dispatch(receiveChannels(channels))
    ))
)

export const createChannel = (channel) => dispatch => (
    ChannelsAPIUtil.createChannel(channel).then(channel => (
        dispatch(receiveChannel(channel))
    ))
);

export const deleteChannel = (serverId, channelId) => dispatch => (
    ChannelsAPIUtil.deleteChannel(serverId, channelId)
        .then(() => dispatch(remvoeChannel(serverId, channelId)))
);
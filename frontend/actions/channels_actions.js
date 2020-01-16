import * as ChannelsAPIUtil from '../utils/channels_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';

const receiveChannels = channels => ({
    type: RECEIVE_CHANNELS,
    channels
});

export const fetchChannels = serverId => dispatch => (
    ChannelsAPIUtil.fetchChannels(serverId).then(channels => (
        dispatch(receiveChannels(channels))
    ))
)
import { connect } from 'react-redux';
import ChannelsList from './channels_index';
import { fetchChannels } from '../../actions/channels_actions';
import { logout } from '../../actions/session_actions';
import { deleteServer } from '../../actions/servers_actions';

const mSTP = (state, ownProps) => {
    return {
        channels: state
    }
};

const mDTP = dispatch => ({
    fetchChannels: serverId => dispatch(fetchChannels(serverId)),
    logout: () => dispatch(logout()),
    removeServer: serverId => dispatch(deleteServer(serverId))
});

export default connect(mSTP, mDTP)(ChannelsList)
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateChannelForm from './create_channel_form';
import { createChannel, fetchChannels } from '../../actions/channels_actions';

const mapStateToProps = (state,ownProps) => {
    return {
        channel: {
            name: '',
            server_id: ownProps.currentServerId
        }
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createChannel: channel => dispatch(createChannel(channel)),
        fetchChannels: () => dispatch(fetchChannels())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelForm);
import { connect } from 'react-redux';
import ServersList from './servers_index';

import { fetchServers } from '../../actions/servers_actions';
import { logout } from '../../actions/session_actions';


const mSTP = state => ({
    servers: state
});

const mDTP = dispatch => ({
    fetchServers: () => dispatch(fetchServers()),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(ServersList);
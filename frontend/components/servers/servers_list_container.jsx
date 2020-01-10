import { connect } from 'react-redux';
import ServersList from './servers_list';

import { fetchServers } from '../../actions/servers_actions';


const mSTP = state => ({
    servers: state
});

const mDTP = dispatch => ({
    fetchServers: () => dispatch(fetchServers())
});

export default connect(mSTP, mDTP)(ServersList);
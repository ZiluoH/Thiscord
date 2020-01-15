import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import JoinServerForm from './join_server_form';
import { createServerMembership, fetchServers, clearServerError } from '../../actions/servers_actions';

const mapStateToProps = state => {
    return {
        server_membership: {
            server_name: '',
            user_id: state.entities.users.id
        },
        error: state.errors.servers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createServerMembership: server_membership => dispatch(createServerMembership(server_membership)),
        fetchServers: () => dispatch(fetchServers()),
        clearServerError: () => dispatch(clearServerError())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerForm);
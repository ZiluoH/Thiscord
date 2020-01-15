import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateServerForm from './create_server_form';
import { createServer, fetchServers, clearServerError } from '../../actions/servers_actions';

const mapStateToProps = state => {
    return{
        server: {
            name: '',
            admin_id: state.entities.users.id
        },
        error: state.errors.servers
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createServer: server => dispatch(createServer(server)),
        fetchServers: () => dispatch(fetchServers()),
        clearServerError: () => dispatch(clearServerError())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm);
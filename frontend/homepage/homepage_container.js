import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Homepage from './homepage';

const mSTP = ({ session, entities: { users } }, ownProps) => {

    return {
        currentUser: users,
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Homepage);

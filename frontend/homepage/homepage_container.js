import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Homepage from './homepage';

const mSTP = ({ session, entities: { users } }, ownProps) => {
    // console.dir(ownProps)
    return {
        currentUser: users,
        // ownProps: ownProps
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(Homepage);

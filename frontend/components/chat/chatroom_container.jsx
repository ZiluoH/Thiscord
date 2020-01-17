import { connect } from 'react-redux';

import ChatRoom from './chatroom';

const mSTP = (state, ownProps) => {
    return {
        chatroom: state
    }
};

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(ChatRoom)
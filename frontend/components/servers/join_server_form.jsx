import React from 'react';

class JoinServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server_name: '',
            user_id: this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const server_membership = Object.assign({}, this.state);
        this.props.createServerMembership(server_membership);
        this.state.server_name = '';
    }
    
    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render() {
        return (
            <form className="join-server-form">
                <h3 className="join-server-form-title">JOIN</h3>
                <img src="https://discordapp.com/assets/8fb52ec5260dfe6c5b93d211d3b6ecde.png" alt=""/>
                <input
                    type='text'
                    value={this.state.server_name}
                    onChange={this.update('server_name')}
                    className="server-form-input"
                    placeholder="Enter a server name"
                    required
                />
                <button onClick={this.handleSubmit} className="join-server-btn">Join a server</button>
            </form>
        );
    }
}

export default JoinServerForm;

import React from 'react';

class CreateChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            server_id: this.props.currentServerId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const channel = Object.assign({}, this.state);        
        this.props.createChannel(channel);
        this.state.name = '';
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <form className="create-channel-form">
                <h4 className="create-channel-form-title">CREATE TEXT CHANNEL</h4>
                <h5 className="create-channel-form-input-title">CHANNEL NAME</h5>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="channel-form-input"
                    required
                />
                <button onClick={this.handleSubmit} className="create-channel-btn">Create channel</button>
            </form>
        );
    }
}

export default CreateChannelForm;

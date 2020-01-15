import React from 'react';

class CreateServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            admin_id:this.props.currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    componentWillUnmount() {
        this.props.clearServerError();
    }

    handleSubmit(e) {
        e.preventDefault();
        const server = Object.assign({},this.state);
        this.props.createServer(server);
        this.state.name = '';      
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    
    render() {
        return (
            <form className="create-server-form">
                <h3 className="create-server-form-title">CREATE</h3>
                <img src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt=""/>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.update('name')}
                    placeholder="Enter a server name"
                    className="server-form-input"
                    required
                />
                <button onClick={this.handleSubmit} className="create-server-btn">Create a server</button>
            </form>
        );
    }
}

export default CreateServerForm;

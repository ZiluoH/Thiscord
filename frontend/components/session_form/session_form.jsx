import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        conset user = Object.assign({}, this.state);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    hello
                    <br/>
                    <label>
                        Email:
                        <input type="text"
                            value = {this.state.email}
                            onChange = {this.update('email')} 
                        />
                    </label>
                    <label>
                        Password:
                        <input type="text"
                            value = {this.state.password}
                            onChange = {this.update('password')} 
                        />
                    </label>
                    <input type="submit" value = "Log In" />
                </form>
            </div>
        );
    }

}

export default SessionForm;
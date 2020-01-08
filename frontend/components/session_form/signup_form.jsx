import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username:'',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="signup-login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Create an account</h3>
                    <h5>EMAIL</h5>
                    <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    <h5>USERNAME</h5>   
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    <h5>PASSWORD</h5>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    <input type="submit" value="Sign Up" />
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
        );
    }

}

export default SignupForm;
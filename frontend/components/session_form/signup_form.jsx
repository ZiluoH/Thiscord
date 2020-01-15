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

    componentWillUnmount() {
        this.props.clearErrors();
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

    renderErrors() {
        return (
            <ul className="auth-form-errors-container">
                {this.props.errors.map((error, i) => (
                    <li className="auth-form-error" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-container-header">
                    <i className="fab fa-discord"></i>
                    <span>THISCORD</span>
                </div>
                <div className="signup-login">
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h3 className="auth-form-title">Create an account</h3>
                    {this.renderErrors()}
                    <h6>EMAIL</h6>
                    <input type="email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="auth-form-input"
                        spellCheck="false"
                        required
                        />
                    <h6>USERNAME</h6>   
                    <input type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        className="auth-form-input"
                        spellCheck="false"
                        required
                        />
                    <h6>PASSWORD</h6>
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="auth-form-input"
                        required
                        />
                    <input type="submit" value="Sign Up" className="auth-form-submit"/>
                    <div className="auth-form-addon">
                        <Link to="/login" className="auth-form-switch">Already have an account?</Link>
                    </div>
                </form>
            </div>
            </div>
        );
    }

}

export default SignupForm;
import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);        
    }

    componentWillUnmount(){
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

    demoUser(){
        this.setState({
            email:"demo@demo.demo",
            password:"password"
        });

        setTimeout(
            () => {
                return this.props.processForm(this.state);
            }, 10);
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

    render(){
        return(
            <div className="signup-login">

                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h3 className="auth-form-title">Welcome back!</h3>
                    <h4 className="auth-form-subtitle">We're so excited to see you again!</h4>
                    {this.renderErrors()}
                    <h6>EMAIL</h6>
                    <input type="email"
                        value = {this.state.email}
                        onChange = {this.update('email')}
                        className="auth-form-input"
                        spellCheck="false"
                        required
                    />
                    <h6>PASSWORD</h6>
                    <input type="password"
                        value = {this.state.password}
                        onChange = {this.update('password')} 
                        className="auth-form-input"
                        required
                    />
                    <input type="submit" value = "Login" className="auth-form-submit"/>
                    <div className="auth-form-addon">
                        <span>Need an account?</span>
                        <Link to="/signup" className="auth-form-switch">Register</Link>
                        <span>  or</span>
                        <button onClick= {this.demoUser} className="auth-form-demo">DEMO</button>
                    </div>
                </form>
            </div>
        );
    }

}



export default SessionForm;
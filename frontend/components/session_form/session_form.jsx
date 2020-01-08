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

    render(){
        return(
            <div className="signup-login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Welcome back!</h3>
                    <h4>We're so excited to see you again!</h4>
                    <label>
                        EMAIL
                        <input type="text"
                            value = {this.state.email}
                            onChange = {this.update('email')} 
                        />
                    </label>
                    <label>
                        PASSWORD
                        <input type="text"
                            value = {this.state.password}
                            onChange = {this.update('password')} 
                        />
                    </label>
                    <input type="submit" value = "Login" />
                    <span>Need an account?</span>
                    <Link to="/signup">Register</Link>
                </form>
                <button onClick= {this.demoUser}>DEMO</button>
            </div>
        );
    }

}

export default SessionForm;
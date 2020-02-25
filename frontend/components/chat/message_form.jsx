import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {  body: "" };
    }

    update(field) {
        return e =>
            this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.subscription.speak({ message: this.state.body,
                                        author_id: this.props.user.id,
                                        channel_id: this.props.currentChannel.id});
        this.setState({ body: "" });
    }

    render() {
        const inputPlaceholder = "Message  #" + this.props.currentChannel.name
        
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className="message-form">
                <input
                    type="text"
                    value={this.state.body}
                    onChange={this.update("body")}
                    placeholder={inputPlaceholder}
                    className="message-form-input"
                    spellCheck={false}
                />
            </form>
        );
    }
}

export default MessageForm;
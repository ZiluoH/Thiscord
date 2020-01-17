import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    switch (data.type) {
                        case "message":
                            this.setState({
                                messages: this.state.messages.concat(data.message)
                            });
                            break;
                        case "messages":
                            this.setState({ messages: data.messages });
                            break;
                    }
                },
                speak: function (data) { return this.perform("speak", data) },
                load: function () { return this.perform("load") }
            }
        );

    }

    loadChat(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].load();
    }

    componentDidUpdate() {
        // this.bottom.current.scrollIntoView();
    }

    render() {
        const { users, channels } = this.props.chatroom.entities
        const currentChannelId = this.props.match.params.channelId

        if (channels[currentChannelId] === undefined) {
            return null;
        }
        

        const messageList = this.state.messages.map((message, idx) => {
            return (
                <li key={idx} className="message">
                    {users.username} :   {message}
                    <div ref={this.bottom} />
                </li>
            );
        });

        return (
            <div className="chatroom-container">
                <div className="chatroom-title"> 
                    #   {channels[currentChannelId].name} 
                </div>
                {/* <button className="load-button"
                    onClick={this.loadChat.bind(this)}>
                    Load Chat History
                </button> */}
                <div className="message-list">{messageList}</div>
                <MessageForm user={users} currentChannel={channels[currentChannelId]} />
            </div>
        );
    }
}

export default ChatRoom;
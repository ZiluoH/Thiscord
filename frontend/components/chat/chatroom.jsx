import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.subscribe = this.subscribe.bind(this);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        const channelId = this.props.match.params.channelId;
        this.subscribe(channelId);
        if (this.bottom.current != null) {
            this.bottom.current.scrollIntoView();
        }
    }

    componentDidUpdate(prevProps) {
        const channelId = this.props.match.params.channelId;
        if(prevProps.match.params.channelId !== channelId){
            this.subscribe(channelId);
        }
       
        if (this.bottom.current != null) {
            this.bottom.current.scrollIntoView();
        }
    }

    componentWillUnmount() {
        if (this.subscription) this.subscription.unsubscribe();
    }

    subscribe(channelId) {
        this.subscription = App.cable.subscriptions.subscriptions.find((subscription) => (
            subscription.identifier === `{"channel":"ChatChannel","channelId":"${channelId}"}`
        ));

        if (this.subscription) {
            this.subscription.load({ channelId });
        } else {
            this.subscription = App.cable.subscriptions.create(
                { channel: "ChatChannel", channelId },
                {
                    received: data => {
                        switch (data.type) {
                            case "message":     
                                data.message.author_name = data.author_name         
                                this.setState({
                                    messages: this.state.messages.concat(data.message)
                                });                                   
                                break;
                            case "messages":
                                this.setState({ messages: data.messages });
                                break;
                        }
                    },
                    speak: function (data) { return this.perform("speak", data); },
                    load: function (data) { return this.perform("load", data); }
                }
            );
        }
    }

    render() {
        const { users, channels } = this.props.chatroom.entities
        const currentChannelId = this.props.match.params.channelId

        if (channels[currentChannelId] === undefined) {
            return null;
        }
        

        const messageList = this.state.messages.map((message, idx) => {
            let timestamp;
            let messageDate = new Date(message.created_at);
            let nowDate = new Date();
            if(messageDate.toDateString() == nowDate.toDateString()){
                if(messageDate.getHours() > 12){
                    timestamp = "Today at " + (messageDate.getHours() % 12.00).toString() + ":" + (messageDate.getMinutes()).toString() + " PM";
                }else{
                    timestamp = "Today at " + (messageDate.getHours() % 12.00).toString() + ":" + (messageDate.getMinutes()).toString() + " AM";
                }
            } else {
                if (messageDate.getHours() > 12) {
                    timestamp = (messageDate.getMonth() + 1).toString() + "/" + 
                                 messageDate.getDay().toString() + "/" + 
                                 messageDate.getFullYear().toString() + " at " + 
                                (messageDate.getHours() % 12.00).toString() + ":" + (messageDate.getMinutes()).toString() + " PM";
                } else {
                    timestamp = (messageDate.getMonth() + 1).toString() + "/" +
                                 messageDate.getDay().toString() + "/" +
                                 messageDate.getFullYear().toString() + " at " + 
                                 (messageDate.getHours() % 12.00).toString() + ":" + (messageDate.getMinutes()).toString() + " AM";
                }
            }

            console.log(timestamp);
            
            if(message.channel_id == currentChannelId){
                if(idx > 0 && this.state.messages[idx - 1].author_name == message.author_name ){
                    return (
                        <li key={idx} className="message">
                            <span className="message-body">{message.body}</span>
                        </li>
                    );
                } else {
                    return (
                        <li key={idx} className="message">
                            <span className="message-author">{message.author_name} <span className = "message-time">{timestamp}</span></span>
                            
                            <span className="message-body">{message.body}</span>
                        </li>
                    );
                }
            }
        });

        return (
            <div className="chatroom-container">
                <div className="chatroom-title"> 
                    #   {channels[currentChannelId].name} 
                </div>
                <div className="message-list">
                    {messageList}
                    <div ref={this.bottom} />
                </div>
                <MessageForm user={users} 
                             currentChannel={channels[currentChannelId]} 
                             subscription = {this.subscription}/>
            </div>
        );
    }
}

export default ChatRoom;
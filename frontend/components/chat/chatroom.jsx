import React from "react";
import MessageForm from "./message_form";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
        this.bottom = React.createRef();
        this.subscribe = this.subscribe.bind(this);
    }

    componentDidMount() {
        // App.cable.subscriptions.create(
        //     { channel: this.props.match.params.channelId },
        //     {
        //         received: data => {
        //             switch (data.type) {
        //                 case "message":
        //                     this.setState({
        //                         messages: this.state.messages.concat(data.message)
        //                     });
        //                     break;
        //                 case "messages":
        //                     this.setState({ messages: data.messages });
        //                     break;
        //             }
        //         },
        //         speak: function (data) { return this.perform("speak", data) },
        //         load: function () { return this.perform("load") }
        //     }
        // );
        const channelId = this.props.match.params.channelId;
        this.subscribe(channelId);
        // console.log("chatroom: " + channelId);
        // console.log(this.props);
        
    }

    // loadChat(e) {
    //     e.preventDefault();
    //     App.cable.subscriptions.subscriptions[0].load();
    // }

    componentDidUpdate(prevProps) {
        // this.bottom.current.scrollIntoView();
        const channelId = this.props.match.params.channelId;
        if(prevProps.match.params.channelId !== channelId){
            this.subscribe(channelId);
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
            const that = this;
            this.subscription = App.cable.subscriptions.create(
                { channel: "ChatChannel", channelId },
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
            return (
                <li key={idx} className="message">
                    {message.body}
                    <div ref={this.bottom} />
                </li>
            );
        });

        return (
            <div className="chatroom-container">
                <div className="chatroom-title"> 
                    #   {channels[currentChannelId].name} 
                </div>
                <div className="message-list">{messageList}</div>
                <MessageForm user={users} 
                             currentChannel={channels[currentChannelId]} 
                             subscription = {this.subscription}/>
            </div>
        );
    }
}

export default ChatRoom;
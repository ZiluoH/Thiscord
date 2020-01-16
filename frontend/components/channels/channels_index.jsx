import React from 'react';

class ChannelsIndex extends React.Component {
    constructor(props){
        super(props);

        // this.channelItem = this.channelItem.bind(this);
    }
    
    componentDidMount(){
        let { serverId } = this.props.match.params
        this.props.fetchChannels(serverId);
    }
    
    componentDidUpdate( prevProps ){
        let currentServer = this.props.match.params.serverId
        let prevServer = prevProps.match.params.serverId
        if (currentServer !== prevServer) {
            this.props.fetchChannels(currentServer);
        }
    }
    
    render(){
        const { users, servers, channels } = this.props.channels.entities
        let channelItem;
        let currentServerName;
        if (Object.keys(channels).length > 0){
            channelItem = Object.keys(channels).map((channel_id) => {
                 return <li className="channel" key={channel_id}> # {channels[channel_id].name} </li>
                }  
            );  

            currentServerName = (
                <div className = "current-server-name">{servers[this.props.match.params.serverId].name}</div>
            )
        }
        
        
        return(
            <div className="channels-section">
                { currentServerName }
                <ul className="channels-list">
                    <header className="channels-list-header">text channels</header>
                    {
                        channelItem
                    }
                </ul>

            </div>
        )
    }


}

export default ChannelsIndex;
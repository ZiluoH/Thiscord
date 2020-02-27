import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import CreateChannelFormContainer from './create_channel_form_container';
import ReactModal from 'react-modal';


class ChannelsIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.removeServer = this.removeServer.bind(this);
        this.removeChannel = this.removeChannel.bind(this);
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

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    removeServer(){
        this.props.removeServer(this.props.match.params.serverId);
    }

    removeChannel(){
        let channelId = this.props.location.pathname.split("/").pop();
        let serverId = this.props.match.params.serverId;
        this.props.removeChannel(serverId, channelId);
    }
    
    render(){
        const { users, servers, channels } = this.props.channels.entities;
        const { serverId } = this.props.match.params
        let channelItem;
        let currentServerName;
        let removeChannelBtn;

        if (servers[serverId] !== undefined){
            if(servers[serverId].admin_id == users.id){
                removeChannelBtn = (
                    <span onClick={this.removeChannel} className="remove-channel"><i className="fas fa-times"></i></span>
                )
            }

            currentServerName = (
                <div className="current-server-name">{servers[serverId].name}
                    <span onClick={this.removeServer} className="remove-server tooltip">
                        <Link to="/">
                            <i className="fas fa-times"></i>
                            <span className="tooltiptext">
                                {users.id == servers[serverId].admin_id ? "DELETE SERVER" : "LEAVE SERVER"}
                            </span>
                        </Link>
                    </span>
                </div>
            );
        }

        if (Object.keys(channels).length > 0){
            channelItem = Object.keys(channels).map((channel_id) => {
                if (channels[channel_id] != undefined){
                    return (
                        <Link to={`/channels/${channels[channel_id].server_id}/${channel_id}`} className="channel" key={channel_id}>
                           # {channels[channel_id].name}  {removeChannelBtn}
                       </Link>
                    )
                }
                }  
            );  
        }      
        
        return(
            <div className="channels-section">
                
                    { currentServerName }
                    <ul className="channels-list">
                        <header className="channels-list-header">text channels<i className="fas fa-plus" onClick={this.handleOpenModal}></i></header>
                        {
                            channelItem
                        }
                    </ul>

                    <div className="user-info">
                        <div className="user-info-username">{users.username}</div>
                        <div className="user-info-id">#{users.id}</div>
                    </div>
                
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Channel Modal"
                    className="channel-modal"
                    overlayClassName="channel-modal-overlay"
                >
                    <span onClick={this.handleCloseModal} className="channel-modal-close">cancle</span>
                    <CreateChannelFormContainer currentServerId={this.props.match.params.serverId} 
                        closeModal={this.handleCloseModal}/>
                </ReactModal>
            </div>
        )
    }
}

export default ChannelsIndex;
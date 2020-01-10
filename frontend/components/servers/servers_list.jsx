import React from 'react';

class ServersList extends React.Component {
    constructor(props){
        super(props);
    }
    
    
    componentDidMount(){
        this.props.fetchServers();
    }
    
    
    render(){
        const{users, servers} = this.props.servers.entities;
        

        return(
            <div>
                {console.log(this.props)
                }
                <h3>ok</h3>
            </div>
        )
    }

}

export default ServersList;
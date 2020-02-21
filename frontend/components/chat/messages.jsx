import React from 'react';

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: []}
    }


    render () {

        return(
            <div>
                This is message List
            </div>
        )
    }
}

export default Messages
import React from 'react';

class Chat extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.chat.socketId} : {this.props.chat.message}</p>
            </div>
        );
    }
}

export default Chat
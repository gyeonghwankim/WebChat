import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/action';
import socket from '../socket/socket';
import ChatList from './ChatList';


const socketSubscribe = (dispatch) => {
    socket.on('connection_success', (data) => {
        dispatch(action.enterChat(data))
    });

    socket.on('receive_chat', (data) => {
        dispatch(action.receiveChat(data));
    });
}

const mapStateToProps = (state) => {
    return {state: state};
}

const mapDispatchToProps = (dispatch) => {
    socketSubscribe(dispatch);
    return {
        sendChat: (message) => dispatch(action.sendChat(message))
    }
}

class Room extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }
    inputChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }

    sendChat = () => {
        this.props.sendChat(this.state.message);
        document.getElementById('chat').value = "";
    }

    render() {
        return (
            <div>
                <div>
                    <ChatList
                        chattings={this.props.state.chatList}
                    />
                </div>
                <div>
                    <input type="text" id="chat" name="message" onChange={this.inputChange}></input>
                    <button onClick={this.sendChat}>전송</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
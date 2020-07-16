import * as type from '../../constant/constant';
import socket from '../../socket/socket';

let newChatList = []

const chatStates = {
    chatList: [],
    socketId: null
};

const chatReducer = (state = chatStates, action) => {
    switch(action.type){
        case type.SEND_CHAT:
            socket.emit('send_chat', {message: action.data});
            return { ...state, message: action.data };
        case type.RECEIVE_CHAT:
            newChatList = state.chatList.slice();
            newChatList.push(action.data);
            return { ...state, chatList: newChatList };
        case type.ENTER_CHAT:
            newChatList = state.chatList.slice();
            newChatList.push(action.data);
            return { ...state, chatList: newChatList };
        case type.CONNECT_SUCCESS:
            return { ...state, socketId: action.data.socketId }
        default:
            return state;
    }
}

export default chatReducer;
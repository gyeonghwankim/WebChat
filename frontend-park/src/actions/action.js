import * as type from '../constant/constant';

export const sendChat = (data) => {
    return {
        type: type.SEND_CHAT,
        data
    }
}

export const receiveChat = (data) => {
    return {
        type: type.RECEIVE_CHAT,
        data
    }
}

export const enterChat = (data) => {
    return {
        type: type.ENTER_CHAT,
        data
    }
}

export const connectionSuccess = (data) => {
    return {
        type: type.CONNECT_SUCCESS,
        data
    }
}
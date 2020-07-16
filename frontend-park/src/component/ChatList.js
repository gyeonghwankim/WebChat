import React from 'react';
import Chat from './Chat';

const ChatList = ({chattings}) => {
    const chatList = chattings.map(
        (chat, i) => (
            <Chat
                chat={chat}
                key={i}
            />
        )
    );

    return (
        <div>
            {chatList}
        </div>
    );
};

export default ChatList;
import { useRef, useState, useEffect } from 'react';
import Message from './Message';
import { Socket } from 'socket.io-client';
import apiUrl from './../helpers/apiUrl';
import { createMessage } from './../services/createMessage';
import { createConnection } from '../services/createConnection';
import { useAuth } from '../hooks/useAuth';
import { ChatProps, MessageProps } from '../types';

import './styles/Chat.css';

export default function Chat({ user }: ChatProps) {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const { token } = useAuth();

  const inputRef = useRef<HTMLInputElement>(null);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = createConnection(apiUrl + "/chat", token);

    const handleMessage = (message: MessageProps) => {
      if (message.author_id !== user.id) {
        message = { ...message, status: "received" }
      }
      setMessages(prevMessages => [message, ...prevMessages]);
    };

    socket.current.on("receive-message", handleMessage);

    return () => {
      socket.current && socket.current.off("receive-message", handleMessage);
    };
  }, [])

  const handleSendMessage = () => {
    if (inputRef.current) {
      const messageContent = inputRef.current.value;

      if (!messageContent) {
        return
      }

      const newMessage = createMessage(user, messageContent);

      socket.current && socket.current.emit("send-message", newMessage);

      inputRef.current.value = '';
    }
    inputRef.current?.focus()
  }

  console.log("render");

  return (
    <div className="container">
      <div>
        <h1 className='chat-title'>Global Chat</h1>
      </div>
      <div className='messages-wrapper'>
        {
          messages.map(({ id, content, author_id, author_name, timestamp, status }) =>
            <Message
              key={id}
              author_id={author_id}
              author_name={author_name}
              content={content}
              timestamp={timestamp}
              status={status}
              id={id}
            />
          )
        }
      </div>
      <div className='input-wrapper'>
        <input
          ref={inputRef}
          placeholder='type a message'
          className='input-message'
          name='input-message'
          type='text'
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button className='input-button' onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  )
}
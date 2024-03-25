import React from 'react';
import './MessagesFragment.css';
import { FiSend} from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';

function MessagesFragment() {
    //store messages
    const [messages, setMessages] = useState([]);
    // store current message
    const [currentMessage, setCurrentMessage] = useState('');

    const chatEndRef = useRef(null);
    //automatically scrolls to the current message
    useEffect(() => {
        chatEndRef.current?.scrollIntoView();
    }, [messages]);


    // Function to handle sending messages
    const sendMessage = () => {
        if (currentMessage.trim() !== '') {
        // Add current message to messages array
        setMessages(prevMessages => [...prevMessages, currentMessage]);
        // Clear input field after sending message
        setCurrentMessage('');
        }
    };

    

    return (
        
        <div className="message-container">
            <div className ="heading">
                <h1>Chat With</h1>
                <h3>a Caregiver</h3>
            </div>

            <div className="chat-area">
                {/* Display messages */}
                {messages.map((message, index) => (
                    <div key={index} className="sent-message">
                    <span className="you-text">You</span> 
                    <span className="message-text">{message}</span>
                </div>
                ))}

                 <div  ref={chatEndRef}></div>
            </div>

            <div className="message-input-container">
                <textarea
                placeholder="Type your message..."
                value={currentMessage}
                onChange={e => setCurrentMessage(e.target.value)}
                />   
            </div>

            <button className="send-button" onClick={sendMessage}>
                <FiSend />
                </button> 

        </div>
        
    );
}

export default MessagesFragment;


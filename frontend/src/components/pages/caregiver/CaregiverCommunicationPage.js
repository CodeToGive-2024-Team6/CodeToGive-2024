import React, { useState, useRef, useEffect } from 'react';
import './CaregiverCommunicationPage.css';
import company_logo from "../company_logo.png";
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { FiSearch } from 'react-icons/fi';
import { RiUserFill} from 'react-icons/ri';




const CaregiverCommunicationPage = () => {

    const placeholderProfiles = Array.from({ length: 10}, (_, index) => ({
        id: index + 1,
        name: `JaneDoe ${index + 1}`,
        icon: <RiUserFill style={{ fontSize: '35px', color: 'black' }} />,
        chatSnippet: 'I was wondering if I could...', 
    }));


    // Store messages
    const [messages, setMessages] = useState([]);
    // Store current message
    const [currentMessage, setCurrentMessage] = useState('');

    const chatEndRef = useRef(null);
    
    // Automatically scrolls to the current message
    useEffect(() => {
        chatEndRef.current?.scrollIntoView();
    }, [messages]);


    // Function to handle sending messages
    const sendMessages = () => {
        if (currentMessage.trim() !== '') {
            // Add current message to messages array
            setMessages(prevMessages => [...prevMessages, currentMessage]);
            // Clear input field after sending message
            setCurrentMessage('');
        }
    };

    return (
        <div className="communication-container">

            <div className="sidebar">

                <Link to="/caregiver_homepage" style={{ textDecoration: 'none', color: '#00AFD7' }}>
                        <FiHome style={{ fontSize: '24px', marginRight: '5px' }}/>
                </Link>

                    <h1>Chat With</h1>
                    <h3>Residents</h3>
                    
                    <div className="search-bar-container">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button className="search-button">
                            <FiSearch className="search-button-icon" />
                        </button>
                    </div>


                    <div className="profile-list">
                    {placeholderProfiles.map(profile => (
                        <div key={profile.id} className="profile-item">
                            <div className="profile-info">
                                <div className="profile-icon">{profile.icon}</div>
                                <div className="profile-details">
                                    <p className="profile-name">{profile.name}</p>
                                    <p className="chat-snippet">{profile.chatSnippet}</p>
                                 </div>
                            </div>
                        </div>
                        ))}
                    </div>
        </div>


            <div className="chat-header">
                <h1> Jane Doe</h1>
            </div>
                    
            <div className="chat-area">
                {/* Display messages */}
                <img src={company_logo} alt="company logo" className="logo-image" />
                {messages.map((message, index) => (
                    <div key={index} className="sent-message">
                        <span className="you-text">You</span>
                        <span className="message-text">{message}</span>
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>

            <div className="communication-input-container">
                <textarea
                    placeholder="Type your message..."
                    value={currentMessage}
                    onChange={e => setCurrentMessage(e.target.value)}
                />
            </div>

            <button className="button-send" onClick={sendMessages}>
                <FiSend />
            </button>

        </div>
    );
};

export default CaregiverCommunicationPage;

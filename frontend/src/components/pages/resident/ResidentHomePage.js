// HomePage.js

import React, { useEffect, useState } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { LuGoal } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
//import companyLogo from "../../../company_logo.png";

const HomePage = () => {
    const [activeContent, setActiveContent] = useState('goals');
    
    useEffect(() => {
        const list = document.querySelectorAll('.list');

        function activeLink() {
            list.forEach((item) => 
                item.classList.remove('active'));
            this.classList.add('active');
        }

        list.forEach((item) =>
            item.addEventListener('click', activeLink));

        return () => {
            list.forEach((item) =>
                item.removeEventListener('click', activeLink));
        };
    }, []);

    return (
        <div className='resident-homepage-container'>
            <div className="navigation">
                <ul>
                    <VscAccount 
                        style={{color: 'white', fontSize: '1em', marginRight: '50px'}}
                    />
                    {/* Main content of your application */}

                    <li className={activeContent === 'goals' ? 'list active' : 'list'}>
                        <a onClick={() => setActiveContent('goals')}>
                            <span class="icon">
                            <LuGoal style={{fontSize: '1em'}}/></span>
                            <span class="title">GOALS</span>
                        </a>
                    </li>
                    <li className={activeContent === 'reminders' ? 'list active' : 'list'}>
                        <a onClick={() => setActiveContent('reminders')}>
                            <span class="icon">
                            <FaRegBell style={{fontSize: '1em'}}/></span>
                            <span class="title">REMINDERS</span>
                        </a>
                    </li>
                    <li className={activeContent === 'resources' ? 'list active' : 'list'}>
                        <a onClick={() => setActiveContent('resources')}>
                            <span class="icon">
                            <FaBook style={{fontSize: '1em'}}/></span>
                            <span class="title">RESOURCES</span>
                        </a>
                    </li>
                    <li className={activeContent === 'messages' ? 'list active' : 'list'}>
                        <a onClick={() => setActiveContent('messages')}>
                            <span class="icon">
                            <FiMessageSquare style={{fontSize: '1em'}}/></span>
                            <span class="title">MESSAGES</span>
                        </a>
                    </li>
                </ul>
            </div>

            {/* Additional content for the homepage */}
            <div className='additional-content'>
                {activeContent === 'goals' && (
                    <>
                        <h2>Welcome Back, (Caregiver Name) 👋</h2>
                        <p>Your assigned goals</p>
                    </>
                )}
                {activeContent === 'reminders' && (
                    <>
                        <h2>Reminders</h2>
                        <p>Your reminders content goes here</p>
                    </>
                )}
                {activeContent === 'resources' && (
                    <>
                        <h2>Resources</h2>
                        <p>Your resources content goes here</p>
                    </>
                )}
                {activeContent === 'messages' && (
                    <>
                        <h2>Messages</h2>
                        <p>Your messages content goes here</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default HomePage;

// HomePage.js

import React, { useEffect } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import { VscAccount } from "react-icons/vsc";
import { LuGoal } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
//import companyLogo from './company_logo.png';

const HomePage = () => {
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
        <div class="navigation">
            <ul>
                <VscAccount 
                    style={{color: 'white', fontSize: '1em', marginRight: '50px'}}
                />
                {/* Main content of your application */}

                <li class="list active">
                    <a href="#">
                        <span class="icon">
                        <LuGoal style={{fontSize: '1em'}}/></span>
                        <span class="title">GOALS</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                        <FaRegBell style={{fontSize: '1em'}}/></span>
                        <span class="title">REMINDERS</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                        <FaBook style={{fontSize: '1em'}}/></span>
                        <span class="title">RESOURCES</span>
                    </a>
                </li>
                <li class="list">
                    <a href="#">
                        <span class="icon">
                        <FiMessageSquare style={{fontSize: '1em'}}/></span>
                        <span class="title">MESSAGES</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;

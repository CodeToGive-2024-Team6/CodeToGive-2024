import React, { useEffect, useState } from 'react';
import "./CaregiverResidentPage.css"; // Import CSS file

//import fragments
import ProfileFragment from "./Fragments/ProfileFragment/ProfileFragment";
import GoalsFragment from "./Fragments/GoalsFragment/GoalsFragment";
import RemindersFragment from "./Fragments/RemindersFragment/RemindersFragment";
import ResourcesFragment from "./Fragments/ResourcesFragment/ResourcesFragment";
import MessagesFragment from "./Fragments/MessagesFragment/MessagesFragment";
import NotesFragment from "./Fragments/NotesFragment/NotesFragment";


//import company logo
import company_logo from "./company_logo.png";

import { VscAccount } from "react-icons/vsc";


import { LuGoal } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { Profile } from "./Profile.js";


const CaregiverResidentPage = () => {


    const [selectedOption, setSelectedOption] = useState('RESOURCES');

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


        <div className='resident-profile-container-caregiver '>

            <div class="navigation">
                <ul>
                    <VscAccount
                        style={{ color: 'white', fontSize: '1em', marginRight: '50px' }}
                    />
                    {/* Main content of your application */}


                    <li class="list active" onClick={() => setSelectedOption('PROFILE')}>
                        <a href="#">
                            <span class="icon">
                                <FaRegUser style={{ fontSize: '1em' }} /></span>
                            <span class="title">PROFILE</span>
                        </a>
                    </li>


                    <li class="list" onClick={() => setSelectedOption('GOALS')}>
                        <a href="#">
                            <span class="icon">
                                <LuGoal style={{ fontSize: '1em' }} /></span>
                            <span class="title">GOALS</span>
                        </a>
                    </li>

                    <li class="list" onClick={() => setSelectedOption('REMINDERS')}>
                        <a href="#">
                            <span class="icon">
                                <FaRegBell style={{ fontSize: '1em' }} /></span>
                            <span class="title">REMINDERS</span>
                        </a>
                    </li>

                    <li class="list" onClick={() => setSelectedOption('RESOURCES')}>
                        <a href="#">
                            <span class="icon">
                                <FaBook style={{ fontSize: '1em' }} /></span>
                            <span class="title">RESOURCES</span>
                        </a>
                    </li>

                    <li class="list" onClick={() => setSelectedOption('MESSAGES')}>
                        <a href="#">
                            <span class="icon">
                                <FiMessageSquare style={{ fontSize: '1em' }} /></span>
                            <span class="title">MESSAGES</span>
                        </a>
                    </li>


                    <li class="list" onClick={() => setSelectedOption('NOTES')}>
                        <a href="#">
                            <span class="icon">
                                <CgNotes style={{ fontSize: '1em' }} /></span>
                            <span class="title">NOTES</span>
                        </a>
                    </li>

                </ul>

            </div>

            {/* have a container for the heading and content */}

            <div className='additional-content-caregiver'>
                <div className="header-bar-caregiver">
                    <div className="circle-icon">
                    </div>
                    {/* add company logo to the header */}
                    <img src={company_logo} alt="company logo" style={{ width: '400px', height: '200px', marginLeft: '60%' }} />

                </div>

                {/* display the content based on the selected option */}
                <div style={{ marginLeft: '4%', marginTop: '12%' }}>
                    {selectedOption === 'PROFILE' && <ProfileFragment />}
                    {selectedOption === 'GOALS' && <GoalsFragment />}
                    {selectedOption === 'REMINDERS' && <RemindersFragment />}
                    {selectedOption === 'RESOURCES' && <ResourcesFragment />}
                    {selectedOption === 'MESSAGES' && <MessagesFragment />}
                    {selectedOption === 'NOTES' && <NotesFragment />}
                </div>

            </div>



        </div>


    );

}

export default CaregiverResidentPage;


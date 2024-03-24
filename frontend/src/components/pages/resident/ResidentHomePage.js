// HomePage.js

import React, { useEffect, useState } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import { VscAccount } from 'react-icons/vsc';
import { LuGoal } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
//import companyLogo from "../../../company_logo.png";

//import fragments
import GoalsFragment from './Fragments/GoalsFragment/GoalsFragment';
import RemindersFragment from './Fragments/RemindersFragment/RemindersFragment';
import ResourcesFragment from './Fragments/ResourcesFragment/ResourcesFragment';
import MessagesFragment from './Fragments/MessagesFragment/MessagesFragment';

const HomePage = () => {
  const [activeContent, setActiveContent] = useState('goals');
  const mockObjectives = [
    {
      title: 'Maintaining a healthy living environment',
      description: 'In particular, the bedroom',
      term: 'Short-term',
      status: 'Completed',
      means: '',
      healthAspects: ['Global Health']
    },
    {
      title: 'Improving consumption habits',
      description: 'Maintain a routine of consumption by using the appropriate services: transition to use only the prescribed medication (methadone, dilaudid)',
      term: 'Short-term',
      status: 'In progress',
      means: 'Use addiction services and follow established routines (average 4 injections per day)',
      healthAspects: ['Physical Health', 'Mental health']
    },
    {
      title: 'Maintain medical follow-up with treating teams',
      description: '',
      term: 'Short-term',
      status: 'Future',
      means: 'Keep your appointments and ask for support',
      healthAspects: ['Physical Health']
    },
    {
      title: 'Obtaining specialized follow-up for Victims of Sexual Assault (CALACS)',
      description: '',
      term: 'Short-term',
      status: 'Paused',
      means: 'Undertake the CAVACS process (Mrs. does not want to at the moment)',
      healthAspects: ['Mental Health', 'Social Health', 'Economic Health']
    },
    {
      title: 'Stabilizing consumption',
      description: 'Use only the prescribed medication (methadone) to be able to pay for the room on the 3rd floor.',
      term: 'Long-term',
      status: 'In progress',
      means: '',
      healthAspects: ['Physical Health', 'Mental health']
    }
  ];

  useEffect(() => {
    const list = document.querySelectorAll('.list');

    function activeLink() {
      list.forEach((item) => item.classList.remove('active'));
      this.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));

    return () => {
      list.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []);

  return (
    <div className="resident-homepage-container">
      <div className="navigation">
        <ul>
          <VscAccount
            style={{ color: 'white', fontSize: '1em', marginRight: '50px' }}
          />
          {/* Main content of your application */}

          <li className={activeContent === 'goals' ? 'list active' : 'list'}>
            <a href="#" onClick={() => setActiveContent('goals')}>
              <span className="icon">
                <LuGoal style={{ fontSize: '1em' }} />
              </span>
              <span className="title">GOALS</span>
            </a>
          </li>
          <li
            className={activeContent === 'reminders' ? 'list active' : 'list'}
          >
            <a href="#" onClick={() => setActiveContent('reminders')}>
              <span className="icon">
                <FaRegBell style={{ fontSize: '1em' }} />
              </span>
              <span className="title">REMINDERS</span>
            </a>
          </li>
          <li
            className={activeContent === 'resources' ? 'list active' : 'list'}
          >
            <a href="#" onClick={() => setActiveContent('resources')}>
              <span className="icon">
                <FaBook style={{ fontSize: '1em' }} />
              </span>
              <span className="title">RESOURCES</span>
            </a>
          </li>
          <li className={activeContent === 'messages' ? 'list active' : 'list'}>
            <a href="#" onClick={() => setActiveContent('messages')}>
              <span className="icon">
                <FiMessageSquare style={{ fontSize: '1em' }} />
              </span>
              <span className="title">MESSAGES</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="additional-content-resident">
        <div className="welcome-resident">
          <h1>Welcome Resident Name</h1>
          <p>
            Here you can view your goals, reminders, resources, and messages.
          </p>
        </div>

        <div className="m-6">
          {activeContent === 'goals' && (
            <GoalsFragment mockObjectives={mockObjectives} />
          )}
          {activeContent === 'reminders' && <RemindersFragment />}
          {activeContent === 'resources' && <ResourcesFragment />}
          {activeContent === 'messages' && <MessagesFragment />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState} from 'react';
import './CaregiverResidentPage.css'; // Import CSS file
import { useLocation } from 'react-router-dom';

//import fragments
import ProfileFragment from './Fragments/ProfileFragment/ProfileFragment';
import GoalsFragment from './Fragments/GoalsFragment/GoalsFragment';
import RemindersFragment from './Fragments/RemindersFragment/RemindersFragment';
import ResourcesFragment from './Fragments/ResourcesFragment/ResourcesFragment';
import MessagesFragment from './Fragments/MessagesFragment/MessagesFragment';
import NotesFragment from './Fragments/NotesFragment/NotesFragment';

//import company logo
import company_logo from './company_logo.png';
import { VscAccount } from 'react-icons/vsc';

import { LuGoal } from 'react-icons/lu';
import { FaRegBell } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { SideBar, SideBarItem } from '../SideBar.js';
import {
  Bell,
  CircleUserRound,
  Goal,
  LibraryBig,
  ListTodo,
  MessageSquareText,
  NotebookTabsIcon,
} from 'lucide-react';
import SurveyFragment from './Fragments/SurveyFragment/SurveyFragment.js';

const CaregiverResidentPage = () => {
  const location = useLocation();
  const resident = location.state.resident;

  const [selectedOption, setSelectedOption] = useState('PROFILE');

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

  const handleActivateItem = (itemName) => {
    setSelectedOption(itemName);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidder">
      <div className="flex-none">
        <SideBar onActivateItem={handleActivateItem} className="fixed h-screen">
          <SideBarItem icon={<CircleUserRound />} text="PROFILE" active />
          <SideBarItem icon={<Goal />} text="GOALS" />
          <SideBarItem icon={<Bell />} text="REMINDERS" />
          <SideBarItem icon={<LibraryBig />} text="RESOURCES" />
          <SideBarItem icon={<MessageSquareText />} text="MESSAGES" />
          <SideBarItem icon={<NotebookTabsIcon />} text="NOTES" />
          <SideBarItem icon={<ListTodo />} text="SURVEYS" />
        </SideBar>
      </div>

      {/* Container for the heading and content with scrolling enabled */}
      <div className="flex-1 overflow-auto">
        <div className="header-bar-caregiver sticky top-0">
          <div className="circle-icon"></div>
          {/* Company logo in the header */}
          <img
            src={company_logo}
            alt="company logo"
            style={{ width: '400px', height: '200px', marginLeft: '60%' }}
          />
        </div>

        {/* Content area */}
        <div
          className="caregiver-fragments overflow-auto"
          style={{ marginLeft: '4%', marginTop: '12%' }}
        >
          {selectedOption === 'PROFILE' && <ProfileFragment resident={resident} />}
          {selectedOption === 'GOALS' && <GoalsFragment resident={resident} />}
          {selectedOption === 'REMINDERS' && <RemindersFragment resident={resident} />}
          {selectedOption === 'RESOURCES' && <ResourcesFragment resident={resident} />}
          {selectedOption === 'MESSAGES' && <MessagesFragment resident={resident} />}
          {selectedOption === 'NOTES' && <NotesFragment resident={resident} />}
          {selectedOption === 'SURVEYS' && <SurveyFragment resident={resident} />}
        </div>
      </div>
    </div>
  );
};

export default CaregiverResidentPage;

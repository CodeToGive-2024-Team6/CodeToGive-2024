// HomePage.js

import React, { useEffect, useState } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import {
  Bell,
  CircleUserRound,
  Goal,
  LibraryBig,
  ListTodo,
  MessageSquareText,
} from 'lucide-react';
//import companyLogo from "../../../company_logo.png";

//import fragments

import GoalsFragment from './Fragments/GoalsFragment/GoalsFragment';
import RemindersFragment from './Fragments/RemindersFragment/RemindersFragment';
import ResourcesFragment from './Fragments/ResourcesFragment/ResourcesFragment';
import MessagesFragment from './Fragments/MessagesFragment/MessagesFragment';
import { SideBar, SideBarItem } from './SideBar';
import { Link } from 'react-router-dom';
import SurveyFragment from './Fragments/SurveyFragment/SurveyFragment';

const HomePage = () => {
  const [activeContent, setActiveContent] = useState('GOALS');

  const handleActivateItem = (itemName) => {
    setActiveContent(itemName);
  };

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
    <div className="h-screen w-screen flex overflow-hidden">
      <div className="flex-none">
        <SideBar onActivateItem={handleActivateItem} className="h-screen fixed">
          <SideBarItem icon={<Goal />} text="GOALS" active />
          <SideBarItem icon={<Bell />} text="REMINDERS" />
          <SideBarItem icon={<MessageSquareText />} text="MESSAGES" />
          <SideBarItem icon={<LibraryBig />} text="RESOURCES" />
          <SideBarItem icon={<ListTodo />} text="SURVEYS" />
        </SideBar>
      </div>
      <div className="flex flex-col m-6 flex-1 overflow-auto">
        <div className="flex w-full justify-between my-6">
          <div className="text-2xl font-bold">Welcome back, Jane! 👋</div>
          <Link className="no-underline" to="/">
            <div className="p-3 bg-gray-200 text-gray-400 rounded-md hover:cursor-pointer hover:bg-gray-300">
              LOGOUT
            </div>
          </Link>
        </div>
        <div
          className="flex flex-col flex-1 overflow-auto"
          style={{ flexBasis: '40%', flexGrow: 1 }}
        >
          {activeContent === 'GOALS' && (
            <>
              <div className="mb-6">Your assigned goals and objectives</div>
              <GoalsFragment />
            </>
          )}
          {activeContent === 'REMINDERS' && <RemindersFragment />}
          {activeContent === 'RESOURCES' && <ResourcesFragment />}
          {activeContent === 'MESSAGES' && <MessagesFragment />}
          {activeContent === 'SURVEYS' && <SurveyFragment />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

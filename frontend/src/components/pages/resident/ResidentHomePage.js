// HomePage.js

import React, { useEffect, useState } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import {
  Bell,
  CircleUserRound,
  LibraryBig,
  MessageSquareText,
} from 'lucide-react';
//import companyLogo from "../../../company_logo.png";

//import fragments

import GoalsFragment from './Fragments/GoalsFragment/GoalsFragment';
import RemindersFragment from './Fragments/RemindersFragment/RemindersFragment';
import ResourcesFragment from './Fragments/ResourcesFragment/ResourcesFragment';
import MessagesFragment from './Fragments/MessagesFragment/MessagesFragment';
import { SideBar, SideBarItem } from '../../SideBar';

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
    <div className="h-screen w-screen flex">
      <SideBar onActivateItem={handleActivateItem}>
        <SideBarItem icon={<CircleUserRound />} text="GOALS" active />
        <SideBarItem icon={<Bell />} text="REMINDERS" />
        <SideBarItem icon={<MessageSquareText />} text="MESSAGES" />
        <SideBarItem icon={<LibraryBig />} text="RESOURCES" />
      </SideBar>
      <div className="flex flex-col m-6 flex-1">
        <div className="text-2xl font-bold my-6 ">Welcome back, Jane! 👋</div>
        <div
          className="flex flex-col flex-1"
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;

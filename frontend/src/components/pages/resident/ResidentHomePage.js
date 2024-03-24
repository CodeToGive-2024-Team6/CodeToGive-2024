// HomePage.js

import React, { useEffect, useState } from 'react';
import './ResidentHomePage.css'; // Import CSS file
import { Bell, 
  CircleUserRound, 
  LibraryBig, 
  MessageSquareText 
} from 'lucide-react';    
//import companyLogo from "../../../company_logo.png";

//import fragments

import GoalsFragment from './Fragments/GoalsFragment/GoalsFragment';
import RemindersFragment from './Fragments/RemindersFragment/RemindersFragment';
import ResourcesFragment from './Fragments/ResourcesFragment/ResourcesFragment';
import MessagesFragment from './Fragments/MessagesFragment/MessagesFragment';
import { SideBar, SideBarItem} from '../../SideBar';

const HomePage = () => {
  const [activeContent, setActiveContent] = useState('GOALS');

  const handleActivateItem = (itemName) => {
    setActiveContent(itemName);
  };

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
    <div className="h-screen w-screen flex">
      <SideBar onActivateItem={handleActivateItem}>
        <SideBarItem icon={<CircleUserRound />} text="GOALS" active/>
        <SideBarItem icon={<Bell />} text="REMINDERS" />
        <SideBarItem icon={<MessageSquareText />} text="MESSAGES" />
        <SideBarItem icon={<LibraryBig />} text="RESOURCES" />
      </SideBar>
      <div className="flex flex-col m-6 flex-1">
        <div className="text-2xl font-bold my-6 ">Welcome back, Jane! 👋</div>
        <div className="flex flex-col md:flex-row gap-x-6">
          <div
            className="flex flex-col flex-1"
            style={{ flexBasis: '40%', flexGrow: 1 }}
          >
            {activeContent === 'GOALS' && (
              <>
                <div className="mb-6">Your assigned goals and objectives</div>
                <GoalsFragment mockObjectives={mockObjectives} />
              </>
            )}
            {activeContent === 'REMINDERS' && <RemindersFragment />}
            {activeContent === 'RESOURCES' && <ResourcesFragment />}
            {activeContent === 'MESSAGES' && <MessagesFragment />}
          </div>
          <div
            className="mt-10 flex flex-col flex-1 gap-y-6"
            style={{ flexBasis: '0%', flexGrow: 1 }}
          >
            <div className="shadow-inner rounded-2xl p-6">
              Progress is shown here! _______________
            </div>
            <div className="shadow-inner rounded-2xl p-6">
              Feedback Form here!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

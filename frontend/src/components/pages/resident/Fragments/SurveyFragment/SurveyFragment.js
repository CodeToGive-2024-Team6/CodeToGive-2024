import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SurveyFragment = () => {
  const [objectives, setGoals] = useState([]);
  const surveys = [
    {
      title: 'Tell us about your stay!',
      link: '',
    },
    {
      title: 'Tell us about your stay!',
      link: '',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-x-6">
      <div className="flex flex-col flex-1 gap-y-6" style={{ flex: '2 1 0%' }}>
        {/* {objectives.map((objective, index) => (
          <SurveyCard key={index} objective={objective} />
        ))} */}
      </div>
    </div>
  );
};

export default SurveyFragment;

import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const SurveyFragment = () => {
  const surveys = [
    {
      title: 'Tell us about your stay!',
      link: 'https://docs.google.com/forms',
    },
    {
      title: 'How did you find your intervention plan?',
      link: 'https://docs.google.com/forms',
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 m-6">
      {surveys.map((survey, index) => (
        <div className='border-double p-6 rounded-3xl text-xl'>
          <div>{survey.title}</div>
          <div className="underline">Go to survey</div>
        </div>
      ))}
        <div className='flex justify-center items-center border-double p-6 rounded-3xl text-xl'>
          <Plus />
        </div>
    </div>
  );
};

export default SurveyFragment;

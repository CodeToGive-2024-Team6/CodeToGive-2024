import React from 'react';

import ObjectiveCard from '../../../../ObjectiveCard';

function GoalsFragment({ mockObjectives }) {
  return (
    <div className='flex flex-col gap-y-6'>
      {mockObjectives.map((objective, index) => (
        <ObjectiveCard key={index} objective={objective} />
      ))}
    </div>
  );
}

export default GoalsFragment;

import React from 'react';

const ObjectiveCard = ({ objective }) => {
  let bgColorClass = '';

  switch (objective.status) {
    case 'Completed':
      bgColorClass = 'bg-sky-400';
      break;
    case 'In progress':
      bgColorClass = 'bg-sky-300';
      break;
    default:
      bgColorClass = 'bg-gray-300';
  }

  return (
    <div
      className={`relative flex flex-col w-full ${bgColorClass} text-white text-lg rounded-2xl p-6 gap-y-2`}
    >
      {objective.title && <h2>Title: {objective.title}</h2>}
      {objective.status && <p>Status: {objective.status}</p>}
      {objective.term && <p>Term: {objective.term}</p>}
      {objective.healthAspects && <p>Tags: {objective.healthAspects.join(', ')}</p>}

      <div className="md:absolute bottom-4 right-4 bg-white hover:bg-gray-300 text-sky-400 py-2 px-4 rounded-lg cursor-pointer">
        SEE MORE
      </div>
    </div>
  );
};

export default ObjectiveCard;

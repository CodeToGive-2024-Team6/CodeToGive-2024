import React from 'react';

const ObjectiveCard = ({ objective }) => {
  let bgColorClass = '';

  switch (objective.status) {
    case 'Completed':
      bgColorClass = 'bg-rose-400';
      break;
    case 'In progress':
      bgColorClass = 'bg-rose-300';
      break;
    default:
      bgColorClass = 'bg-gray-300';
  }

  return (
    <div
      className={`relative flex flex-col w-full ${bgColorClass} text-white text-lg rounded-2xl p-6 gap-y-2`}
    >
      {objective.title && (
        <div className="text-xl font-bold">Title: {objective.title}</div>
      )}
      {objective.status && <div>Status: {objective.status}</div>}
      {objective.term && <div>Term: {objective.term}</div>}
      {objective.healthAspects && (
        <div>Tags: {objective.healthAspects.join(', ')}</div>
      )}

      <div className="md:absolute bottom-4 right-4 bg-white hover:bg-gray-300 text-sky-400 py-2 px-4 rounded-lg cursor-pointer">
        SEE MORE
      </div>
    </div>
  );
};

export default ObjectiveCard;

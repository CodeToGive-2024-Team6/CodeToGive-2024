import React, { useState, useEffect } from 'react';

const GoalCard = ({ objective }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [isModalOpen]);

  let cardColorClass = '';
  switch (objective.status) {
    case 'Completed':
      cardColorClass = 'bg-rose-400 text-white';
      break;
    case 'In Progress':
      cardColorClass = 'bg-rose-300 text-rose-800';
      break;
    default:
      cardColorClass = 'bg-gray-100 text-rose-800';
  }

  return (
    <>
      <div
        className={`relative flex flex-col w-full ${cardColorClass} text-lg rounded-2xl p-6 gap-y-2 border-double border-4 border-rose-200`}
      >
        {objective.title && (
          <div className="text-xl font-bold">Title: {objective.title}</div>
        )}
        {objective.status && <div>Status: {objective.status}</div>}
        {objective.term && <div>Term: {objective.term}</div>}
        {objective.healthAspects && (
          <div>Tags: {objective.healthAspects.join(', ')}</div>
        )}

        <div
          onClick={() => setIsModalOpen(true)}
          className="md:absolute bottom-4 right-4 bg-white hover:bg-gray-300 text-sky-400 py-2 px-4 rounded-lg cursor-pointer"
        >
          SEE MORE
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg text-black w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-bold">Description</h2>
            <p>{objective.description}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-rose-400 text-white rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GoalCard;

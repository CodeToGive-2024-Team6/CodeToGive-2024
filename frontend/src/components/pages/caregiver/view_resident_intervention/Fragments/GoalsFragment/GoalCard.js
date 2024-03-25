import React, { useState, useEffect } from 'react';
import GoalModal from './GoalModal';

const GoalCard = ({ goal, onEditGoal, onDeleteGoal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [isModalOpen]);

  // Define the class based on objective status
  let bgColorClass = '';
  switch (goal.status) {
    case 'Completed':
      bgColorClass = 'bg-cyan-500';
      break;
    case 'In Progress':
      bgColorClass = 'bg-cyan-400';
      break;
    default:
      bgColorClass = 'bg-gray-400';
  }

  return (
    <>
      <div
        className={`relative flex flex-col w-full ${bgColorClass} text-white text-lg rounded-2xl p-6 gap-y-2`}
      >
        {goal.title && (
          <div className="text-xl font-bold">Title: {goal.title}</div>
        )}
        {goal.status && <div>Status: {goal.status}</div>}
        {goal.term && <div>Term: {goal.term}</div>}
        {goal.healthAspects && <div>Tags: {goal.healthAspects.join(', ')}</div>}
        <div
          onClick={() => setIsModalOpen(true)}
          className="md:absolute bottom-4 right-4 bg-white hover:bg-gray-300 text-sky-400 py-2 px-4 rounded-lg cursor-pointer"
        >
          EDIT
        </div>
        <button
          onClick={() => onDeleteGoal(goal.objectiveId)}
          className="md:absolute bottom-4 right-28 bg-white hover:bg-gray-300 text-sky-400 py-2 px-4 rounded-lg cursor-pointer"
        >
          DELETE
        </button>
      </div>
      <GoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        goal={goal}
        onAddEditGoal={onEditGoal}
        mode={'edit'}
      />
    </>
  );
};

export default GoalCard;

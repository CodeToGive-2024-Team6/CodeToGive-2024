import React from 'react';

const GoalModal = ({ isOpen, onClose, objective, mode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg text-black w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-bold">{mode === 'edit' ? 'Edit Objective' : 'Add Objective'}</h2>
        {mode === 'edit' ? (
          <p>{objective.description}</p>
        ) : (
          // You can include form fields for adding a new objective here
          <p>Form fields for new objective</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-rose-400 text-white rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GoalModal;

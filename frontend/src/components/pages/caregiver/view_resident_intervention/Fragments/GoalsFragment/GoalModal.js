import React, { useState, useEffect } from 'react';

const GoalModal = ({ isOpen, onClose, onAddEditGoal, goal, mode }) => {
  // Initialize state with either the objective to edit or a default structure for adding
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    term: 'Short-term', // Assuming "Short-term" as a default
    status: 'Coming Soon', // Assuming "Coming Soon" as a default
    means: '',
    healthDeterminant: [],
  });

  // If editing an objective, populate the form with the current objective details
  useEffect(() => {
    if (mode === 'edit' && goal) {
      setNewGoal({ ...goal });
    }
  }, [mode, goal]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEditGoal(newGoal);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setNewGoal((prev) => ({
      ...prev,
      healthDeterminant: checked
        ? [...prev.healthDeterminant, value]
        : prev.healthDeterminant.filter((hd) => hd !== value),
    }));
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-lg text-black w-3/4 md:w-1/2 lg:w-1/3"
      >
        <h2 className="text-lg font-bold">
          {mode === 'edit' ? 'Edit Goal' : 'Add Goal'}
        </h2>

        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={newGoal.title}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="Goal title"
          />
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <input
            name="description"
            value={newGoal.description}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="Goal description"
          />
        </div>

        <div>
          <label className="block mb-2">Term</label>
          <select
            name="term"
            value={newGoal.term}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="Short-term">Short-term</option>
            <option value="Medium-term">Medium-term</option>
            <option value="Long-term">Long-term</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Status</label>
          <select
            name="status"
            value={newGoal.status}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="Coming Soon">Coming Soon</option>
            <option value="Pause">Pause</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 rounded-md">Means</label>
          <input
            type="text"
            name="means"
            value={newGoal.means}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder="Goal means"
          />
        </div>

        <fieldset>
          <legend className="block mb-2">Health Determinants</legend>
          {['Physical Health', 'Mental Health'].map((hd) => (
            <div key={hd}>
              <label>
                <input
                  type="checkbox"
                  name="healthDeterminant"
                  value={hd}
                  checked={newGoal.healthDeterminant.includes(hd)}
                  onChange={handleCheckboxChange}
                />
                {hd}
              </label>
            </div>
          ))}
        </fieldset>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-sky-300 text-white rounded hover:bg-sky-400"
        >
          Save
        </button>
        <button
          onClick={onClose}
          type="button"
          className="mt-4 ml-2 px-4 py-2 bg-rose-400 text-white rounded hover:bg-gray-400"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default GoalModal;

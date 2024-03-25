import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalCard from './GoalCard';
import { Plus } from 'lucide-react';
import GoalModal from './GoalModal';

function GoalsFragment() {
  const residentId = 'testResident1'; // TODO: replace with how auth provider passes this
  const [objectives, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get(`/objectives/${residentId}`);
        setGoals(response.data);
      } catch (error) {
        console.error('Failed to fetch objectives:', error);
      }
    };

    fetchGoals();
  }, []);

  const openAddModal = () => {
    setIsModalOpen(true);
  };

  const handleAddGoal = async (newGoalData) => {
    const newGoal = {
      ...newGoalData,
      objectiveId: `id_${Math.random().toString(16).slice(2)}`,
    };

    setGoals([...objectives, newGoal]);

    try {
      await axios.post(`/setgoals/${residentId}`, newGoal);
    } catch (error) {
      console.error('Failed to add new goal:', error);
    }
  };

  const handleEditGoal = async (updatedGoal) => {
    const updatedGoals = objectives.map((obj) =>
      obj.objectiveId === updatedGoal.objectiveId ? updatedGoal : obj
    );
    setGoals(updatedGoals);

    try {
      await axios.patch(
        `/objectives/${residentId}/${updatedGoal.objectiveId}`,
        updatedGoal
      );
    } catch (error) {
      console.error('Failed to update goal:', error);
    }
  };

  const handleDeleteGoal = async (objectiveIdToDelete) => {
    setGoals(
      objectives.filter(
        ({ objectiveId }) => objectiveId !== objectiveIdToDelete
      )
    );

    try {
      await axios.delete(`/objectives/${residentId}/${objectiveIdToDelete}`);
    } catch (error) {
      console.error('Failed to delete goal:', error);
    }
  };

  const totalGoals = objectives.length;
  const completedGoals = objectives.filter(
    (objective) => objective.status === 'Completed'
  ).length;
  const completionPercentage =
    totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  return (
    <div className="w-full flex flex-col md:flex-row gap-x-6">
      <div
        className="flex flex-col flex-1 gap-y-6 pb-6"
        style={{ flex: '2 1 0%' }}
      >
        {objectives.map((objective, index) => (
          <GoalCard
            key={index}
            onEditGoal={handleEditGoal}
            goal={objective}
            onDeleteGoal={handleDeleteGoal}
          />
        ))}
        <button
          onClick={openAddModal}
          className="border-double border-4 border-sky-200 px-4 py-6 rounded-2xl bg-white text-sky-200"
        >
          <Plus size={40} />
        </button>
      </div>
      {totalGoals > 0 ? (
        <div
          className="flex flex-col flex-1 gap-y-6 overflow-visible"
          style={{ flexBasis: '0%', flexGrow: 1 }}
        >
          <div className="flex flex-col shadow-md rounded-2xl p-6 gap-2">
            <div className="text-lg font-medium">Progress Check</div>
            <div>
              Resident completed {completedGoals} of {totalGoals} objectives!
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div
                className="bg-sky-300 h-2.5 rounded-full"
                style={{
                  width: `${completionPercentage}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <h1>No objectives assigned</h1>
      )}
      <GoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddEditGoal={handleAddGoal}
        mode={'add'}
      />
    </div>
  );
}

export default GoalsFragment;

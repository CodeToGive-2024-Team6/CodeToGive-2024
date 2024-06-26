import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalCard from './GoalCard';

function GoalsFragment() {
  const [objectives, setGoals] = useState([]);

  useEffect(() => {
    const residentId = 'testResident1';
    const fetchGoals = async () => {
      try {
        const response = await axios.get(`/objectives/${residentId}`);
        setGoals(response.data); // Assuming the data structure from your example
      } catch (error) {
        console.error('Failed to fetch objectives:', error);
      }
    };

    fetchGoals();
  }, []);

  const totalGoals = objectives.length;
  const completedGoals = objectives.filter(
    (objective) => objective.status === 'Completed'
  ).length;
  const completionPercentage =
    totalGoals > 0 ? (completedGoals / totalGoals) * 100 : 0;

  return (
    <div className="flex flex-col md:flex-row gap-x-6">
      <div className="flex flex-col flex-1 gap-y-6" style={{ flex: '2 1 0%' }}>
        {objectives.map((objective, index) => (
          <GoalCard key={index} objective={objective} />
        ))}
      </div>
      {objectives.length > 0 ? (
        <div
          className="flex flex-col flex-1 gap-y-6 overflow-visible"
          style={{ flexBasis: '0%', flexGrow: 1 }}
        >
          <div className="flex flex-col border-double border-gray-300 rounded-2xl p-6 gap-2">
            <div className="text-lg font-medium">Your Progress</div>
            <div>
              Completed {completedGoals} of {totalGoals}{' '}
              objectives!
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div
                className="bg-rose-300 h-2.5 rounded-full"
                style={{
                  width: `${completionPercentage}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <h3>No objectives assigned</h3>
      )}
    </div>
  );
}

export default GoalsFragment;

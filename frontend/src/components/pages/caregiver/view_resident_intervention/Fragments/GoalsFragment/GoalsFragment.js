import React from 'react';
import ObjectiveCard from './ObjectiveCard';

function GoalsFragment({ objectives }) {
  const safeObjectives = objectives || [];

  const totalObjectives = safeObjectives.length;
  const completedObjectives = safeObjectives.filter(
    (objective) => objective.status === 'Completed'
  ).length;
  const completionPercentage =
    totalObjectives > 0 ? (completedObjectives / totalObjectives) * 100 : 0;

  return (
    <div className="flex flex-col md:flex-row gap-x-6">
      <div className="flex flex-col gap-y-6">
        {safeObjectives.map((objective, index) => (
          <ObjectiveCard key={index} objective={objective} />
        ))}
      </div>
      {safeObjectives.length > 0 ? (
        <div
          className="flex flex-col flex-1 gap-y-6 overflow-visible"
          style={{ flexBasis: '0%', flexGrow: 1 }}
        >
          <div className="flex flex-col shadow-md rounded-2xl p-6 gap-2">
            <div className="text-lg font-medium">Your Progress</div>
            <div>
              You've completed {completedObjectives} of {totalObjectives}{' '}
              objectives!
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
          <div className="shadow-md rounded-2xl p-6">Feedback Form here!</div>
        </div>
      ) : (
        <h1>No objectives assigned</h1>
      )}
    </div>
  );
}

export default GoalsFragment;

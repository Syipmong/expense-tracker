import React from 'react';

const BudgetProgress = ({ totalBudget, spent }) => {
  const progressPercentage = (spent / totalBudget) * 100;

  return (
    <div className="budget-progress">
      <h2>Budget Progress</h2>
      <p>Total Budget: ${totalBudget}</p>
      <p>Amount Spent: ${spent}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default BudgetProgress;

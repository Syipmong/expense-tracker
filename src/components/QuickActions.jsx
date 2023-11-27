import React from 'react';

const QuickActions = () => {
  const handleAddExpense = () => {
    // Add your logic for adding an expense
    console.log('Adding expense...');
  };

  const handleFilterTransactions = () => {
    // Add your logic for filtering transactions
    console.log('Filtering transactions...');
  };

  return (
    <div>
      <button onClick={handleAddExpense}>Add Expense</button>
      <button onClick={handleFilterTransactions}>Filter Transactions</button>
    </div>
  );
};

export default QuickActions;

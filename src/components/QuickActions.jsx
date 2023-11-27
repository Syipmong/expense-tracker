import React from 'react';



const QuickActions = ({ toggleAddExpenseForm }) => {
  return (
    <div>
      <button onClick={toggleAddExpenseForm}>Add Expense</button>
      {/* <button onClick={handleFilterTransactions}>Filter Transactions</button> */}
    </div>
  );
};

export default QuickActions;


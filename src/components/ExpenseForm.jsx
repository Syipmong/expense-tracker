import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleAddExpense = () => {
    if (expenseName && expenseAmount && !isNaN(expenseAmount)) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        date: new Date().toISOString(),
      };

      onAddExpense(newExpense);
      setExpenseName('');
      setExpenseAmount('');
    } else {
      console.error('Invalid expense input');
    }
  };

  return (
    <section className="add-expense-form">
      <h2>Add Expense</h2>
      <label>
        Expense Name:
        <input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
      </label>
      <label>
        Expense Amount:
        <input type="text" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
      </label>
      <button onClick={handleAddExpense}>Add Expense</button>
    </section>
  );
};

export default ExpenseForm;

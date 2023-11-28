import React, { useState } from 'react';

const AddExpensePage = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString());
  const [expenseCategory, setExpenseCategory] = useState('');

  const handleAddExpense = () => {
    if (expenseName && expenseAmount && !isNaN(expenseAmount) && expenseCategory) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        date: expenseDate,
        category: expenseCategory,
      };

      onAddExpense(newExpense);
      // Reset form fields
      setExpenseName('');
      setExpenseAmount('');
      setExpenseDate(new Date().toISOString());
      setExpenseCategory('');
    } else {
      console.error('Invalid expense input');
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <label>
        Expense Name:
        <input type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
      </label>
      <label>
        Expense Amount:
        <input type="text" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} />
      </label>
      <label>
        Expense Date:
        <input type="date" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} />
      </label>
      <label>
        Expense Category:
        <input type="text" value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)} />
      </label>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default AddExpensePage;

import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div className="expense-list">
            <h3>Expense List</h3>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <span>{expense.description}</span>
                        <span>${expense.amount.toFixed(2)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;

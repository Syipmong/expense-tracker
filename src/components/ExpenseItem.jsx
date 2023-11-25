import React from 'react';

const ExpenseItem = () => {
    return (
        <div className="expense-item">
            <i className="fas fa-dollar-sign"></i>
            <p>Expense Description</p>
            <span>$100.00</span>
        </div>
    );
}

export default ExpenseItem;

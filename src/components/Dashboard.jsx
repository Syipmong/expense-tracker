import React from 'react';
import ExpenseList from './ExpenseList';
// import Charts from './Charts';

const Dashboard = () => {
    // Dummy data for expenses
    const expenses = [
        { id: 1, description: 'Groceries', amount: 50.00 },
        { id: 2, description: 'Dinner', amount: 30.00 },
        { id: 3, description: 'Gas', amount: 20.00 },
        // Add more expenses as needed
    ];

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>

            {/* Display charts */}
            {/* <Charts expenses={expenses} /> */}

            {/* Display the list of expenses */}
            <ExpenseList expenses={expenses} />
        </div>
    );
}

export default Dashboard;

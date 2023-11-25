import './dashboard.css';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Overview Section */}
      <section className="overview">
        <div className="total-expenses">
          <h3>Total Expenses</h3>
          {/* Placeholder for total expenses amount */}
        </div>
        <div className="monthly-expenses">
          <h3>Monthly Expenses</h3>
          {/* Placeholder for monthly expenses amount */}
        </div>
        <div className="expense-trends">
          <h3>Expense Trends</h3>
          {/* Placeholder for chart */}
        </div>
      </section>

     
      <section className="expense-categories">
        <div className="category-breakdown">
          <h3>Expense Breakdown</h3>
          {/* Placeholder for pie chart */}
        </div>
        <div className="top-categories">
          <h3>Top Spending Categories</h3>
          {/* Placeholder for top categories list */}
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="recent-transactions">
        <h2>Recent Transactions</h2>
        
      </section>

      
      <section className="budget-progress">
        <h2>Budget Progress</h2>
        
      </section>

      <section className="quick-actions">
        <button>Add Expense</button>
        <button>Filter Transactions</button>
      </section>
    </div>
  );
}

export default Dashboard;

import ExpenseBreakdownPieChart from './ExpenseBreakdownPieChart';
import TopSpendingBarChart from './TopSpendingBarChart';
import './dashboard.css';
import React from 'react';
// import React, { useState } from 'react';
import RecentTransactions from './RecentTransactions';
import sampleTransactions from './sampletransaction';
// import ExpenseTrendsLineChart from './ExpenseTrendsLineChart';
// import ExpenseForm from './ExpenseForm';


const budgetProgressData = {
  totalBudget: 1000,
  spent: 600,
};
const Dashboard = () => {
  // const [expenses, setExpenses] = useState([]);
  // const handleAddExpense = (newExpense) => {
  //   // Update the expenses state with the new expense
  //   setExpenses([...expenses, newExpense]);
  // };
  const progressPercentage = (budgetProgressData.spent / budgetProgressData.totalBudget) * 100;
  // const expenseTrendsData = [
  //   { month: 'Jan', amount: 40 },
  //   { month: 'Feb', amount: 80 },
  //   { month: 'Mar', amount: 100 },
  //   { month: 'Apr', amount: 56 },
  // ];

  const topSpendingData = [
    { category: 'Electronics', amount: 800, color: '#FF5733' },
    { category: 'Clothing', amount: 600, color: '#33FF57' },
    { category: 'Entertainment', amount: 400, color: '#5733FF' },
    {category: 'School', amount: 1000, color: '#68ff63'},
    {category: 'Food and Beverage', amount: 200, color: '#9c47ff'},
    {category: 'Transportation', amount: 300, color: '#fefbd8'},
    {category: 'Household', amount: 100, color: '#dcfbff'},
    {category: 'Healthcare', amount: 500, color: '#aafffc'}
  ];

  const expenseData = [
    { name: 'Food', value: 500, color: '#FF5733' },
    { name: 'Transportation', value: 300, color: '#33FF57' },
    { name: 'Utilities', value: 200, color: '#5733FF' },
    {name: 'Shopping', value: 100, color: '#68ff63'},
    {name: 'Healthcare', value: 90, color: '#e3f2fd'},
    {name: 'Others', value: 100, color: '#ccebff'}
  ];

  
 


  return (
    <div className="dashboard">
      
      <section className="overview">
        <div className="total-expenses">
          <h3>Total Expenses</h3>
          <p>$1,200.00</p>
        </div>
        <div className="monthly-expenses">
          <h3>Monthly Expenses</h3>
          <p>$600.00</p>
        </div>
        <div className="expense-trends">
          <h3>Expense Trends</h3>
          <h4>Unavailable at the moment</h4>
          {/* <ExpenseTrendsLineChart data={expenseTrendsData} color="#3498db" /> */}
        </div>
      </section>

     
      <section className="expense-categories">
        <div className="category-breakdown">
          <h3>Expense Breakdown</h3>
          <ExpenseBreakdownPieChart data={expenseData} colors={['#FF5733', '#33FF57', '#5733FF',"#8884d8",'#e3f2fd','#ccebff']}  />
          
        </div>
        <div className="top-categories">
          <h3>Top Spending Categories</h3>
          <TopSpendingBarChart data={topSpendingData} colors={['#FF5733', '#5733FF']} />
          
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="recent-transactions">
        <h2>Recent Transactions</h2>
        <RecentTransactions transactions={sampleTransactions} />
        {/* <ExpenseForm onAddExpense={handleAddExpense} />
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>{expense.name}: ${expense.amount.toFixed(2)}</li>
          ))}
        </ul> */}
      </section>

      
      <section className="budget-progress">
        <h2>Budget Progress</h2>
        <p>Total Budget: ${budgetProgressData.totalBudget}</p>
        <p>Amount Spent: ${budgetProgressData.spent}</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </section>

      <section className="quick-actions">
        <button>Add Expense</button>
        <button>Filter Transactions</button>
      </section>
    </div>
  );
}

export default Dashboard;

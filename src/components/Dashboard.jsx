import ExpenseBreakdownPieChart from './ExpenseBreakdownPieChart';
import TopSpendingBarChart from './TopSpendingBarChart';
import './dashboard.css';
import React from 'react';
// import React, { useState } from 'react';
// import RecentTransactions from './RecentTransactions';
// import sampleTransactions from './sampletransaction';
// import QuickActions from './QuickActions';
import ExpenseList from './ExpenseList';
import Categories from './Categories';
import BudgetProgress from './BudgetProgress';
// import Filters from './Filters';
// import ExpenseForm from './ExpenseForm';
import ExpenseTrendsLineChart from './ExpenseTrendsLineChart';
// import AddExpensePage from './AddExpensePage';
// import Modal from './Modal';

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

  // const [isAddExpenseModalVisible, setAddExpenseModalVisible] = useState(false);

  // const toggleAddExpenseModal = () => {
  //   setAddExpenseModalVisible(!isAddExpenseModalVisible);
  // };

  // const [isAddExpenseFormVisible, setAddExpenseFormVisible] = useState(false);

  // const toggleAddExpenseForm = () => {
  //   setAddExpenseFormVisible(!isAddExpenseFormVisible);
  // };
  // const [expenses, setExpenses] = useState([]);
  // const handleAddExpense = (newExpense) => {
  //   // Update the expenses state with the new expense
  //   setExpenses([...expenses, newExpense]);
  // };
 // const progressPercentage = (budgetProgressData.spent / budgetProgressData.totalBudget) * 100;
  const expenseTrendsData = [
    { month: 'Jan', amount: 40 },
    { month: 'Feb', amount: 80 },
    { month: 'Mar', amount: 100 },
    { month: 'Apr', amount: 56 },
  ];

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

   const expenses = [
    { name: 'Groceries', amount: 50.0 },
    { name: 'Transportation', amount: 25.0 },
    { name: 'Utilities', amount: 30.0 },
    { name: 'Dining out', amount: 40.0 },
    { name: 'Miscellaneous', amount: 30.0 }
  ];

 
  
  
 


  return (

    

    <div className="dashboard">
      {/* Overview Section */}
      <section className="categories">
        {/* <Filters /> */}
        <Categories />
      </section>

      {/* Expense List Section */}
      <section className="expense-list">
        <ExpenseList expenses={expenses} />
      </section>

      {/* Expense Charts Section */}
      <section className="expense-charts top-categories">
        <TopSpendingBarChart data={topSpendingData} colors={['#FF5733', ]}/>
        <ExpenseBreakdownPieChart data={expenseData}  colors={['#FF5733', '#33FF57', '#5733FF',"#8884d8",'#e3f2fd','#ccebff']}/>
        
      </section>

      {/* Budget Progress Section */}
      <section className="budget-progress">
        <BudgetProgress data={budgetProgressData} />
      </section>
      <section className='expense-trends'>
        <ExpenseTrendsLineChart data={expenseTrendsData} color={'#ff5733'} />
      </section>
      {/* Quick Actions Section */}
      <section className="quick-actions">
        {/* <QuickActions  onAddExpenseClick={toggleAddExpenseModal}/> */}
      </section>

      
      {/* {window.location.pathname === '/add-expense' && <AddExpensePage onAddExpense={handleAddExpense} />} */}

    </div>
  );
};

export default Dashboard;

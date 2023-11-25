import './style.css';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#transactions">Transactions</a></li>
        <li><a href="#categories">Categories</a></li>
      </ul>
      <div className="buttons">
        <button className="primary-button">Add Expense</button>
        <button className="secondary-button">Log Out</button>
      </div>
    </nav>
  );
}

export default Navbar;



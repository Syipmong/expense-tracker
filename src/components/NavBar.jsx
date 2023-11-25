import './style.css';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Expense Tracker</div>
      <ul className="nav-links">
        <li><a href="https://money.com">Home</a></li>
        <li><a href="https://money.com">Transactions</a></li>
        <li><a href="https://money.com">Categories</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


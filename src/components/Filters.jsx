// Filters.js
import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      {/* Add your filter options and logic here */}
      <div className="filter-option">
        <label>Category:</label>
        <select>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="filter-option">
        <label>Date Range:</label>
        <input type="date" />
        <span>to</span>
        <input type="date" />
      </div>
    </div>
  );
};

export default Filters;

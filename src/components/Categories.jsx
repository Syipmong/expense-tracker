import React from 'react';

const Categories = () => {
  const categoryData = [
    { name: 'Food', icon: 'utensils' },
    { name: 'Transportation', icon: 'car' },
    { name: 'Utilities', icon: 'lightbulb' },
    { name: 'Shopping', icon: 'shopping-bag' },
    { name: 'Healthcare', icon: 'medkit' },
    { name: 'Others', icon: 'ellipsis-h' },
  ];

  return (
    <div className="categories">
      <h3>Categories</h3>
      <div className="category-list">
        {categoryData.map((category, index) => (
          <div key={index} className="category">
            <i className={`fas fa-${category.icon}`}></i> {category.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

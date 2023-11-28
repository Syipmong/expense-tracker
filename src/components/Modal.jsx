import React from 'react';
import ExpenseForm from './ExpenseForm';

const Modal = ({ onClose, onAddExpense }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <ExpenseForm onAddExpense={onAddExpense} />
      </div>
    </div>
  );
};

export default Modal;

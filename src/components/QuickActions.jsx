import React, {useState} from 'react';
import Modal from './Modal';



const QuickActions = ({ toggleAddExpenseForm }) => {

  const [isAddExpenseModalVisible, setAddExpenseModalVisible] = useState(false);

  const toggleAddExpenseModal = () => {
    setAddExpenseModalVisible(!isAddExpenseModalVisible);
  };

  return (
    <div>
      <button onClick={toggleAddExpenseForm}>Add Expense</button>
      {/* <button onClick={handleFilterTransactions}>Filter Transactions</button> */}

      {isAddExpenseModalVisible && (
        <Modal onClose={toggleAddExpenseModal} onAddExpense={() => {}} />
      )}

    </div>
  );
};

export default QuickActions;


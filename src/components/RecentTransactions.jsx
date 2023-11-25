import React from 'react';

const RecentTransactions = ({ transactions }) => {
  return (
    <section className="recent-transactions">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentTransactions;

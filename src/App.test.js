import { render, screen } from '@testing-library/react';
import App from './App';

test('expense', () => {
  render(<App />);
  const linkElement = screen.getByText(/Expense/i);
  expect(linkElement).toBeInTheDocument();
});

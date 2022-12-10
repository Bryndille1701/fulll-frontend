import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('shows github search header', () => {
  render(<App />);
  const linkElement = screen.getByText(/github search/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument

  expect(buttonElement).toHaveAttribute('disabled')

  fireEvent.change(inputElement, {
    target: {value: 'abcde'}
  });
  expect(buttonElement).not.toHaveAttribute('disabled')

  const inputValue = screen.getByDisplayValue('abcde')
  expect(inputValue).toBeInTheDocument
});

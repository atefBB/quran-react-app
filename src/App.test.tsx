import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('image alt', () => {
  render(<App />);
  screen.getAllByAltText(/page/i).map((el) => {
    expect(el).toBeInTheDocument()
  })
});

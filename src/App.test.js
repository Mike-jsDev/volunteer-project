import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const mainTitle = screen.getByText(/Before and After/i);
  expect(mainTitle).toBeInTheDocument();
});

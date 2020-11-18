import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Paper Tracker Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Paper Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

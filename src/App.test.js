import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('it should display mack031892', () => {
  render(<App />);
  const nameElement = screen.getByText(/mack031892/i);
  expect(nameElement).toBeInTheDocument();
});

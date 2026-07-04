import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the intranet portal landing page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /internal updates in one simple place/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /news/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument();
});

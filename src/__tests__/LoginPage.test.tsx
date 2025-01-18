import { render, screen } from '@testing-library/react';
import LoginPage from '../components/LoginPage';


describe('Login Page', () => {
  test('renders login inputs and button', () => {
    render(<LoginPage />);

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
});

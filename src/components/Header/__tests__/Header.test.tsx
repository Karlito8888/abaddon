import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

// Mock the logo import
jest.mock('../../../assets/logo/abaddon-logo.png', () => 'logo.png');

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByAltText('Abaddon Pest Control Logo')).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('toggles the mobile menu on hamburger click', () => {
    render(<Header />);
    const hamburger = screen.getByRole('button');
    const nav = screen.getByRole('navigation');

    // Initially, the nav should not be open
    expect(nav).not.toHaveClass('header__nav--open');

    // Click the hamburger to open the menu
    fireEvent.click(hamburger);
    expect(nav).toHaveClass('header__nav--open');

    // Click again to close
    fireEvent.click(hamburger);
    expect(nav).not.toHaveClass('header__nav--open');
  });
});

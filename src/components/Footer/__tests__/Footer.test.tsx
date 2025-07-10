import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Abaddon Pest Control Services/)).toBeInTheDocument();
  });

  it('displays quick links', () => {
    render(<Footer />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<Footer />);
    expect(screen.getByText(/42 Paliparan Molino Road/)).toBeInTheDocument();
  });

  it('displays social media links', () => {
    render(<Footer />);
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Viber')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });
});

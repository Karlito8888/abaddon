import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByText('Licensed Pest Control Services in the Philippines')).toBeInTheDocument();
  });

  it('displays the subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/Your trusted partner for a pest-free home and business/)).toBeInTheDocument();
  });

  it('displays the CTA button', () => {
    render(<Hero />);
    expect(screen.getByText('Get a Free Inspection')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services component', () => {
  it('renders without crashing', () => {
    render(<Services />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('displays all service cards', () => {
    render(<Services />);
    expect(screen.getByText('Termite Control')).toBeInTheDocument();
    expect(screen.getByText('Cockroach Extermination')).toBeInTheDocument();
    expect(screen.getByText('Ant Control')).toBeInTheDocument();
    expect(screen.getByText('Rodent Control')).toBeInTheDocument();
  });
});

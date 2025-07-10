import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

// Mock the image import
jest.mock('../../../assets/images/about-us.jpg', () => 'about-us.jpg');

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
    expect(screen.getByText('About Abaddon Pest Control')).toBeInTheDocument();
  });

  it('displays the company description', () => {
    render(<About />);
    expect(screen.getByText(/Founded in the heart of Cavite/)).toBeInTheDocument();
  });

  it('displays the about image', () => {
    render(<About />);
    expect(screen.getByAltText('Abaddon Pest Control team working')).toBeInTheDocument();
  });
});

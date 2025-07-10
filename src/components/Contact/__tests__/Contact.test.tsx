import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact component', () => {
  it('renders without crashing', () => {
    render(<Contact />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<Contact />);
    expect(screen.getByText(/42 Paliparan Molino Road/)).toBeInTheDocument();
  });

  it('allows form submission', () => {
    window.alert = jest.fn(); // Mock alert
    render(<Contact />);
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'This is a test message' } });

    fireEvent.click(screen.getByText('Send Message'));

    expect(window.alert).toHaveBeenCalledWith('Thank you for your message! We will get back to you shortly.');
  });
});

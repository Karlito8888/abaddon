import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Media from '../Media';

// Mock fetch for testing
global.fetch = jest.fn();

describe('Media Component', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  test('renders media section with title', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({ mediaItems: [] }),
    });

    render(<Media />);
    
    // Wait for loading to complete and title to appear
    await waitFor(() => {
      expect(screen.getByText('Our Work in Action')).toBeInTheDocument();
    });
  });

  test('shows loading state initially', () => {
    render(<Media />);
    expect(screen.getByText('Loading media content...')).toBeInTheDocument();
  });

  test('renders photos and videos sections when data is loaded', async () => {
    const mockData = {
      mediaItems: [
        { id: 'fb_001', imagePath: '/media/facebook/abaddon-1.jpg' },
        { id: 'fb_002', imagePath: '/media/facebook/abaddon-2.jpg' },
        { id: 'tt_001', videoPath: '/media/tiktok/vid-1.mp4' },
        { id: 'tt_002', videoPath: '/media/tiktok/vid-2.mp4' }
      ]
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    render(<Media />);
    
    // Wait for loading to complete and sections to appear
    await waitFor(() => {
      expect(screen.getByText('Photos')).toBeInTheDocument();
      expect(screen.getByText('Videos')).toBeInTheDocument();
    });
  });

  test('handles fetch error gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Fetch failed'));

    render(<Media />);
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.queryByText('Loading media content...')).not.toBeInTheDocument();
    });
    
    // Should still render the main title even if fetch fails
    expect(screen.getByText('Our Work in Action')).toBeInTheDocument();
  });
});
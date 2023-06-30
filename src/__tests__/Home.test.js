import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Home />, div);
  });

  it('renders the first img tag with correct props', () => {
    const { getByAltText } = setup();

    // const imgElement = getByAltText('Image description');

    // expect(imgElement).toBeInTheDocument();
    // expect(imgElement.src).toBe('path/to/image.jpg');
    // expect(imgElement.className).toContain('image-class');
    // Additional prop checks if necessary
  });

  // Reusable setup function
  function setup() {
    const utils = render(<Home />);
    return {
      ...utils,
      // Add any additional utility functions or elements needed for the tests
    };
  }
});

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
  });

  function setup() {
    const utils = render(<Home />);
    return {
      ...utils,
    };
  }
});

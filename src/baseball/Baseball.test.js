import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Baseball from './Baseball';

describe('<Baseball />', () => {
  it('Renders Baseball', () => {
    const { getByText } = render(<Baseball />);
    expect(getByText(/Baseball/i))
  });

  it('Adds a strike when strike button is clicked', () => {
      const { getByText } = render(<Baseball />);
      const strikeButton = getByText(/strike!/i);

      fireEvent.click(strikeButton);
      expect(getByText(/Strikes: 1/i)).toBeInTheDocument();
  });

  it('Adds a ball when ball! button is clicked', () => {
    const { getByText } = render(<Baseball />);
    const ballButton = getByText(/ball!/i);

    fireEvent.click(ballButton);
    expect(getByText(/Balls: 1/i)).toBeInTheDocument();
});
});
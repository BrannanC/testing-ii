import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Baseball from './Baseball';

describe('<Baseball />', () => {
  it('Renders Baseball', () => {
    const { getByText } = render(<Baseball />);
    expect(getByText(/Baseball/i))
  });

  it('Strikes: 0 when strike button is clicked 3x', () => {
    const { getByText } = render(<Baseball />);
    const strikeButton = getByText(/strike!/i);

    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    expect(getByText(/Strikes/i)).toHaveTextContent('0');
  });

  it('Adds a strike when strike button is clicked', () => {
      const { getByText } = render(<Baseball />);
      const strikeButton = getByText(/strike!/i);

      fireEvent.click(strikeButton);
      expect(getByText(/Strikes/i)).toHaveTextContent('1');
  });

  it('Adds a strike when foul! button is clicked', () => {
        const { getByText } = render(<Baseball />);
        const foulButton = getByText(/foul!/i);

        fireEvent.click(foulButton);
        expect(getByText(/Strikes/i)).toHaveTextContent('2');
    });

    it('Does not add a strike when foul! button is clicked (2 strikes)', () => {
        const { getByText } = render(<Baseball />);
        const foulButton = getByText(/foul!/i);

        fireEvent.click(foulButton);
        expect(getByText(/Strikes/i)).toHaveTextContent('2');
    });

    it('Balls: 0 when ball! button is clicked 4x', () => {
        const { getByText } = render(<Baseball />);
        const ballButton = getByText(/ball!/i);

        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        fireEvent.click(ballButton);
        expect(getByText(/Balls/i)).toHaveTextContent('0');
    });

  it('Adds a ball when ball! button is clicked', () => {
    const { getByText } = render(<Baseball />);
    const ballButton = getByText(/ball!/i);

    fireEvent.click(ballButton);
    expect(getByText(/Balls/i)).toHaveTextContent('1');
  });

  it('Balls and Strikes to 0 when hit! button is clicked', () => {
    const { getByText } = render(<Baseball />);
    const ballButton = getByText(/ball!/i);
    const foulButton = getByText(/foul!/i);
    const hitButton = getByText(/hit!/i);

    fireEvent.click(ballButton);
    fireEvent.click(foulButton);
    fireEvent.click(hitButton);
    expect(getByText(/balls/i)).toHaveTextContent('0');
    expect(getByText(/strikes/i)).toHaveTextContent('0');
  });

});
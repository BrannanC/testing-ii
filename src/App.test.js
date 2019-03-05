import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  it('Renders App', () => {
    const { getByText } = render(<App />);
    expect(getByText(/App/i))
  });
});

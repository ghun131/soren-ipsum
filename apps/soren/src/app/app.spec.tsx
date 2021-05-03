import React from 'react';
import { render } from '@testing-library/react';
import Button from '@material-ui/core/Button';

import App from './app';

const mockClipboard = {
  writeText: jest.fn(),
};

global.navigator.clipboard = mockClipboard;
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a Soren Ipsum title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Soren Ipsum')).toBeTruthy();
  });

  it('should render copy button', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('copy-button');
    
    expect(element).toBeTruthy();
  })

  it('should render next button', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('next-button');

    expect(element).toBeTruthy();
  })

  it('should render 1 Input box', () => {

  })

  it('should render 1 Select box', () => {

  })

  it('should render 1 p tag with text content', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('excerpt');
    
    expect(element).toBeTruthy();
  })
});

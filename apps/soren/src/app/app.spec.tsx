import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CopyButton from './CopyButton';
import NextButton from './NextButton';

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

  it('should call handler function when CopyButton is clicked', () => {
    const handleCopyText = jest.fn();
    render(<CopyButton isCopied={true} handleCopyText={handleCopyText} />);
    fireEvent.click(screen.getByText('Copied'));
    expect(handleCopyText).toHaveBeenCalledTimes(1);
  });

  it('should render next button', () => {
    const handleApplyNext = jest.fn();
    render(<NextButton handleApplyNext={handleApplyNext} />);
    fireEvent.click(screen.getByText('Next'));
    expect(handleApplyNext).toHaveBeenCalledTimes(1);
  });

  it('should render 1 Input box', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('letter-amount')).toBeTruthy();
  });

  it('should render 1 Select box', () => {
    const { getByTestId } = render(<App />);
    
    expect(getByTestId('letter-type')).toBeTruthy();
  });

  it('should render 1 p tag with text content', () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId('excerpt');

    expect(element).toBeTruthy();
  });
});

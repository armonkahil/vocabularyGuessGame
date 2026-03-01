import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { WordBuilder } from '../WordBuilder';
import type { FeedbackState } from '../../types';

const defaultProps = {
  syllables: [] as string[],
  feedback: null as FeedbackState,
  onClear: jest.fn(),
  onSubmit: jest.fn(),
};

describe('WordBuilder — empty state', () => {
  it('shows placeholder text when no syllables are selected', () => {
    const { getByText } = render(<WordBuilder {...defaultProps} />);
    expect(getByText('Tap syllables to build a word…')).toBeTruthy();
  });

  it('does not show a word preview when no syllables are selected', () => {
    const { queryByText } = render(<WordBuilder {...defaultProps} />);
    // The preview renders the joined string — with no syllables that would be ''.
    // The component conditionally renders only when syllables.length > 0.
    expect(queryByText('')).toBeNull();
  });

  it('Submit button is disabled when syllables array is empty', () => {
    const { getByText } = render(<WordBuilder {...defaultProps} />);
    const submitBtn = getByText('Submit');
    // Disabled TouchableOpacity still renders but onPress should not fire
    fireEvent.press(submitBtn);
    expect(defaultProps.onSubmit).not.toHaveBeenCalled();
  });
});

describe('WordBuilder — with syllables', () => {
  const props = { ...defaultProps, syllables: ['sun', 'light'] };

  it('renders each syllable as a chip', () => {
    const { getByText } = render(<WordBuilder {...props} />);
    expect(getByText('sun')).toBeTruthy();
    expect(getByText('light')).toBeTruthy();
  });

  it('shows the joined word as a preview', () => {
    const { getByText } = render(<WordBuilder {...props} />);
    expect(getByText('sunlight')).toBeTruthy();
  });

  it('does not show placeholder text when syllables are present', () => {
    const { queryByText } = render(<WordBuilder {...props} />);
    expect(queryByText('Tap syllables to build a word…')).toBeNull();
  });

  it('calls onClear when Clear is pressed', () => {
    const onClear = jest.fn();
    const { getByText } = render(<WordBuilder {...props} onClear={onClear} />);
    fireEvent.press(getByText('Clear'));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it('calls onSubmit when Submit is pressed (syllables present)', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<WordBuilder {...props} onSubmit={onSubmit} />);
    fireEvent.press(getByText('Submit'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});

describe('WordBuilder — feedback states', () => {
  const props = { ...defaultProps, syllables: ['sun', 'light'] };

  it('renders without error when feedback is null', () => {
    expect(() => render(<WordBuilder {...props} feedback={null} />)).not.toThrow();
  });

  it('renders without error when feedback is "correct"', () => {
    expect(() => render(<WordBuilder {...props} feedback="correct" />)).not.toThrow();
  });

  it('renders without error when feedback is "incorrect"', () => {
    expect(() => render(<WordBuilder {...props} feedback="incorrect" />)).not.toThrow();
  });
});

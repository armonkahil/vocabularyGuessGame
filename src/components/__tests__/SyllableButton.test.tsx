import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SyllableButton } from '../SyllableButton';

describe('SyllableButton', () => {
  it('renders the syllable text', () => {
    const { getByText } = render(<SyllableButton syllable="sun" onPress={jest.fn()} />);
    expect(getByText('sun')).toBeTruthy();
  });

  it('calls onPress with the correct syllable when tapped', () => {
    const onPress = jest.fn();
    const { getByText } = render(<SyllableButton syllable="light" onPress={onPress} />);
    fireEvent.press(getByText('light'));
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledWith('light');
  });

  it('fires onPress only once per tap', () => {
    const onPress = jest.fn();
    const { getByText } = render(<SyllableButton syllable="rain" onPress={onPress} />);
    fireEvent.press(getByText('rain'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress with updated syllable after re-render', () => {
    const onPress = jest.fn();
    const { getByText, rerender } = render(<SyllableButton syllable="sun" onPress={onPress} />);
    rerender(<SyllableButton syllable="cloud" onPress={onPress} />);
    fireEvent.press(getByText('cloud'));
    expect(onPress).toHaveBeenCalledWith('cloud');
  });

  it('renders different syllables without issue', () => {
    const syllables = ['mis', 'un', 'der', 'stand', 'ing'];
    syllables.forEach((syl) => {
      const { getByText } = render(<SyllableButton syllable={syl} onPress={jest.fn()} />);
      expect(getByText(syl)).toBeTruthy();
    });
  });
});

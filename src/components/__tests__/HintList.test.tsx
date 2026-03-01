import React from 'react';
import { render } from '@testing-library/react-native';
import { HintList } from '../HintList';
import type { TargetWord } from '../../types';

const targetWords: TargetWord[] = [
  { id: 'tw-1', word: 'sunlight', syllables: ['sun', 'light'], definition: 'Light from the sun.' },
  { id: 'tw-2', word: 'raincloud', syllables: ['rain', 'cloud'], definition: 'A cloud that brings rain.' },
  { id: 'tw-3', word: 'darkroom', syllables: ['dark', 'room'], definition: 'A room used to develop film.' },
];

describe('HintList', () => {
  it('renders without crashing', () => {
    expect(() =>
      render(<HintList targetWords={targetWords} solvedWordIds={new Set()} />),
    ).not.toThrow();
  });

  it('shows definition text for unsolved words', () => {
    const { getByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set()} />,
    );
    expect(getByText('Light from the sun.')).toBeTruthy();
    expect(getByText('A cloud that brings rain.')).toBeTruthy();
    expect(getByText('A room used to develop film.')).toBeTruthy();
  });

  it('shows letter count for unsolved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set()} />,
    );
    // sunlight=8, darkroom=8 → two "8 letters"; raincloud=9 → one "9 letters"
    expect(getAllByText('8 letters').length).toBe(2);
    expect(getAllByText('9 letters').length).toBe(1);
  });

  it('shows the word text for solved words', () => {
    const { getByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    expect(getByText('sunlight')).toBeTruthy();
  });

  it('hides definition for solved words', () => {
    const { queryByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    // Solved word's definition should not be shown
    expect(queryByText('Light from the sun.')).toBeNull();
  });

  it('hides letter count for solved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    // Only darkroom (8 letters) remains unsolved with 8-letter count; sunlight is solved
    expect(getAllByText('8 letters').length).toBe(1);
  });

  it('shows correct numbered indices starting at 1', () => {
    const { getByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set()} />,
    );
    expect(getByText('1.')).toBeTruthy();
    expect(getByText('2.')).toBeTruthy();
    expect(getByText('3.')).toBeTruthy();
  });

  it('renders an empty list without crashing', () => {
    expect(() =>
      render(<HintList targetWords={[]} solvedWordIds={new Set()} />),
    ).not.toThrow();
  });

  it('shows letter count for a short word', () => {
    const shortWords: TargetWord[] = [
      { id: 'tw-s1', word: 'sun', syllables: ['sun'], definition: 'The star at the center of our solar system.' },
    ];
    const { getByText } = render(
      <HintList targetWords={shortWords} solvedWordIds={new Set()} />,
    );
    expect(getByText('3 letters')).toBeTruthy();
  });
});

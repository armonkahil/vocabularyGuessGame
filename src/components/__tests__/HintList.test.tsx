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

  it('shows blanks for unsolved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set()} />,
    );
    // Each 2-syllable word produces "___ · ___"; we have three 2-syllable words
    const blanks = getAllByText('___ · ___');
    expect(blanks.length).toBe(3);
  });

  it('shows condensed syllable count for unsolved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set()} />,
    );
    // All three words have 2 syllables → "2syl" each
    const counts = getAllByText('2syl');
    expect(counts.length).toBe(3);
  });

  it('shows the word text for solved words', () => {
    const { getByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    expect(getByText('sunlight')).toBeTruthy();
  });

  it('hides blanks for solved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    // Only 2 unsolved words remain → 2 blank entries
    const blanks = getAllByText('___ · ___');
    expect(blanks.length).toBe(2);
  });

  it('does not show syllable count for solved words', () => {
    const { getAllByText } = render(
      <HintList targetWords={targetWords} solvedWordIds={new Set(['tw-1'])} />,
    );
    // Only 2 unsolved cards should show syllable count
    const counts = getAllByText('2syl');
    expect(counts.length).toBe(2);
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

  it('shows singular "1syl" when a word has only one syllable', () => {
    const singleSyllableWords: TargetWord[] = [
      { id: 'tw-s1', word: 'sun', syllables: ['sun'], definition: 'The star at the center of our solar system.' },
    ];
    const { getByText } = render(
      <HintList targetWords={singleSyllableWords} solvedWordIds={new Set()} />,
    );
    expect(getByText('1syl')).toBeTruthy();
  });
});

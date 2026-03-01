/**
 * Tests the "last stage" branch of GameScreen where isLastStage === true.
 * ALL_STAGES is mocked to contain only one stage so the first completion hits the final-stage path.
 */

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { GameScreen } from '../GameScreen';
import { stage1 } from '../../data/stages';

jest.mock('../../data/stages', () => {
  const original = jest.requireActual('../../data/stages');
  return {
    ...original,
    ALL_STAGES: [original.stage1],
  };
});

function tapSyllables(
  getAllByText: ReturnType<typeof render>['getAllByText'],
  syllables: string[],
) {
  syllables.forEach((syl) => {
    fireEvent.press(getAllByText(syl)[0]);
  });
}

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

describe('GameScreen — last stage completion', () => {
  it('shows "You completed all stages!" with a Finish button on the final stage', () => {
    const { getAllByText, getByText } = render(<GameScreen />);
    stage1.targetWords.forEach((tw) => {
      tapSyllables(getAllByText, tw.syllables);
      fireEvent.press(getByText('Submit'));
    });
    act(() => { jest.advanceTimersByTime(1000); });
    expect(Alert.alert).toHaveBeenCalledWith(
      'Stage Complete! 🎉',
      'You completed all stages!',
      expect.arrayContaining([expect.objectContaining({ text: 'Finish' })]),
    );
  });
});

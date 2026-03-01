/**
 * Integration test: walks through every stage in ALL_STAGES in sequence,
 * solving all target words per stage and pressing "Next Stage" each time.
 * Verifies the final stage shows the "You completed all stages!" alert.
 */

import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { GameScreen } from '../GameScreen';
import { ALL_STAGES } from '../../data/stages';

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

describe('GameScreen — full stage progression', () => {
  it(
    `progresses through all ${ALL_STAGES.length} stages and shows completion on the last`,
    () => {
      const { getAllByText, getByText } = render(<GameScreen />);

      ALL_STAGES.forEach((stage, index) => {
        const isLast = index === ALL_STAGES.length - 1;

        // Solve every target word in the current stage
        stage.targetWords.forEach((tw) => {
          tapSyllables(getAllByText, tw.syllables);
          fireEvent.press(getByText('Submit'));
        });

        // Advance past the 800 ms completion delay
        act(() => { jest.advanceTimersByTime(1000); });

        if (isLast) {
          expect(Alert.alert).toHaveBeenLastCalledWith(
            'Stage Complete! 🎉',
            'You completed all stages!',
            expect.arrayContaining([expect.objectContaining({ text: 'Finish' })]),
          );
        } else {
          // Pull the "Next Stage" button from the most recent Alert call and press it
          const calls = (Alert.alert as jest.Mock).mock.calls;
          const buttons = calls[calls.length - 1][2] as { text: string; onPress: () => void }[];
          const nextBtn = buttons.find((b) => b.text === 'Next Stage')!;
          act(() => { nextBtn.onPress(); });

          // Verify the new stage title is now shown
          expect(getByText(ALL_STAGES[index + 1].name)).toBeTruthy();
        }
      });
    },
    60_000, // generous timeout for 50 stages × N words each
  );
});

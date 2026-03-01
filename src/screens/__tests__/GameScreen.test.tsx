import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { Alert } from 'react-native';
import { GameScreen } from '../GameScreen';
import { stage1, ALL_STAGES } from '../../data/stages';
import { ThemeProvider } from '../../theme/ThemeContext';

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Tap every syllable of a target word in the order specified. */
function tapSyllables(getAllByText: ReturnType<typeof render>['getAllByText'], syllables: string[]) {
  syllables.forEach((syl) => {
    // getAllByText because the same syllable label might appear in word-builder chips too.
    // We always press the first occurrence (the SyllableButton tile).
    const tiles = getAllByText(syl);
    fireEvent.press(tiles[0]);
  });
}

// ─── Setup / Teardown ────────────────────────────────────────────────────────

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(Alert, 'alert').mockImplementation(() => undefined);
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
  jest.restoreAllMocks();
});

// ─── Smoke tests ─────────────────────────────────────────────────────────────

describe('GameScreen — initial render', () => {
  it('renders without crashing', () => {
    expect(() => render(<GameScreen />)).not.toThrow();
  });

  it('shows the stage title', () => {
    const { getByText } = render(<GameScreen />);
    expect(getByText(stage1.name)).toBeTruthy();
  });

  it('shows progress as "0 / N found"', () => {
    const { getByText } = render(<GameScreen />);
    const total = stage1.targetWords.length;
    expect(getByText(`0 / ${total} found`)).toBeTruthy();
  });

  it('renders all syllable tiles from the pool', () => {
    const { getByText } = render(<GameScreen />);
    stage1.syllablePool.forEach((syl) => {
      expect(getByText(syl)).toBeTruthy();
    });
  });

  it('shows the placeholder in WordBuilder on mount', () => {
    const { getByText } = render(<GameScreen />);
    expect(getByText('Tap syllables to build a word…')).toBeTruthy();
  });

  it('renders the "Syllable Pool" label', () => {
    const { getByText } = render(<GameScreen />);
    expect(getByText('Syllable Pool')).toBeTruthy();
  });

  it('renders the "Hints" label', () => {
    const { getByText } = render(<GameScreen />);
    expect(getByText('Hints')).toBeTruthy();
  });
});

// ─── Syllable selection ───────────────────────────────────────────────────────

describe('GameScreen — syllable selection', () => {
  it('tapping a syllable tile removes the placeholder and shows a chip', () => {
    const { getByText, queryByText } = render(<GameScreen />);
    const firstSyl = stage1.syllablePool[0];
    fireEvent.press(getByText(firstSyl));
    // Placeholder should be gone
    expect(queryByText('Tap syllables to build a word…')).toBeNull();
  });

  it('tapping multiple syllables builds the correct preview', () => {
    const tw = stage1.targetWords[0];
    const { getAllByText, getByText } = render(<GameScreen />);
    tapSyllables(getAllByText, tw.syllables);
    // The joined word preview should be visible
    expect(getByText(tw.word)).toBeTruthy();
  });
});

// ─── Clear ───────────────────────────────────────────────────────────────────

describe('GameScreen — Clear button', () => {
  it('pressing Clear resets the builder to placeholder', () => {
    const { getByText, queryByText } = render(<GameScreen />);
    const firstSyl = stage1.syllablePool[0];
    fireEvent.press(getByText(firstSyl));
    fireEvent.press(getByText('Clear'));
    expect(getByText('Tap syllables to build a word…')).toBeTruthy();
    expect(queryByText(firstSyl + firstSyl)).toBeNull(); // no stacked preview
  });
});

// ─── Correct submission ───────────────────────────────────────────────────────

describe('GameScreen — correct submission', () => {
  it('solving a word increments the progress counter', () => {
    const tw = stage1.targetWords[0];
    const total = stage1.targetWords.length;
    const { getAllByText, getByText } = render(<GameScreen />);
    tapSyllables(getAllByText, tw.syllables);
    fireEvent.press(getByText('Submit'));
    expect(getByText(`1 / ${total} found`)).toBeTruthy();
  });

  it('solving a word resets the builder back to placeholder', () => {
    const tw = stage1.targetWords[0];
    const { getAllByText, getByText } = render(<GameScreen />);
    tapSyllables(getAllByText, tw.syllables);
    fireEvent.press(getByText('Submit'));
    expect(getByText('Tap syllables to build a word…')).toBeTruthy();
  });

  it('the same word cannot be submitted twice', () => {
    const tw = stage1.targetWords[0];
    const total = stage1.targetWords.length;
    const { getAllByText, getByText } = render(<GameScreen />);
    // First solve
    tapSyllables(getAllByText, tw.syllables);
    fireEvent.press(getByText('Submit'));
    expect(getByText(`1 / ${total} found`)).toBeTruthy();
    // Attempt the same word again
    tapSyllables(getAllByText, tw.syllables);
    fireEvent.press(getByText('Submit'));
    // Counter should still be 1
    expect(getByText(`1 / ${total} found`)).toBeTruthy();
  });
});

// ─── Incorrect submission ─────────────────────────────────────────────────────

describe('GameScreen — incorrect submission', () => {
  it('submitting a wrong word does not change the progress counter', () => {
    const total = stage1.targetWords.length;
    const { getByText } = render(<GameScreen />);
    fireEvent.press(getByText(stage1.syllablePool[0]));
    fireEvent.press(getByText('Submit'));
    expect(getByText(`0 / ${total} found`)).toBeTruthy();
  });

  it('clears the builder after an incorrect submission', () => {
    const { getByText } = render(<GameScreen />);
    fireEvent.press(getByText(stage1.syllablePool[0]));
    fireEvent.press(getByText('Submit'));
    expect(getByText('Tap syllables to build a word…')).toBeTruthy();
  });

  it('feedback clears after 900 ms', () => {
    const { getByText } = render(<GameScreen />);
    fireEvent.press(getByText(stage1.syllablePool[0]));
    fireEvent.press(getByText('Submit'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByText(`0 / ${stage1.targetWords.length} found`)).toBeTruthy();
  });
});

// ─── Stage complete ───────────────────────────────────────────────────────────

describe('GameScreen — stage completion', () => {
  it('shows a completion Alert after all words are solved', () => {
    const { getAllByText, getByText } = render(<GameScreen />);
    stage1.targetWords.forEach((tw) => {
      tapSyllables(getAllByText, tw.syllables);
      fireEvent.press(getByText('Submit'));
    });
    act(() => { jest.advanceTimersByTime(1000); });
    expect(Alert.alert).toHaveBeenCalledWith(
      'Stage Complete! 🎉',
      'Ready for the next stage?',
      expect.arrayContaining([expect.objectContaining({ text: 'Next Stage' })]),
    );
  });

  it('pressing Next Stage advances to stage 2', () => {
    const { getAllByText, getByText } = render(<GameScreen />);
    stage1.targetWords.forEach((tw) => {
      tapSyllables(getAllByText, tw.syllables);
      fireEvent.press(getByText('Submit'));
    });
    act(() => { jest.advanceTimersByTime(1000); });
    const buttons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress: () => void }[];
    const nextBtn = buttons.find((b) => b.text === 'Next Stage')!;
    act(() => { nextBtn.onPress(); });
    expect(getByText(ALL_STAGES[1].name)).toBeTruthy();
  });
});

// ─── Settings modal ───────────────────────────────────────────────────────────

describe('GameScreen — settings modal', () => {
  it('opens the settings modal when the cog button is pressed', () => {
    const { getByTestId, getByText } = render(<GameScreen />);
    fireEvent.press(getByTestId('settings-btn'));
    expect(getByText('Settings')).toBeTruthy();
  });

  it('closes the settings modal when Close is pressed', () => {
    const { getByTestId, queryByText } = render(<GameScreen />);
    fireEvent.press(getByTestId('settings-btn'));
    fireEvent.press(getByTestId('close-settings-btn'));
    expect(queryByText('Settings')).toBeNull();
  });

  it('resets progress to stage 1 via the modal', async () => {
    const { getAllByText, getByText, getByTestId } = render(<GameScreen />);
    // Advance to stage 2
    stage1.targetWords.forEach((tw) => {
      tapSyllables(getAllByText, tw.syllables);
      fireEvent.press(getByText('Submit'));
    });
    act(() => { jest.advanceTimersByTime(1000); });
    const alertButtons = (Alert.alert as jest.Mock).mock.calls[0][2] as { text: string; onPress: () => void }[];
    act(() => { alertButtons.find((b) => b.text === 'Next Stage')!.onPress(); });
    expect(getByText(ALL_STAGES[1].name)).toBeTruthy();

    // Open settings and reset
    fireEvent.press(getByTestId('settings-btn'));
    fireEvent.press(getByTestId('reset-progress-btn'));
    const resetButtons = (Alert.alert as jest.Mock).mock.calls.at(-1)![2] as { text: string; onPress?: () => void }[];
    act(() => { resetButtons.find((b) => b.text === 'Reset')!.onPress!(); });

    // Should be back to stage 1
    expect(getByText(ALL_STAGES[0].name)).toBeTruthy();
  });

  it('toggles dark mode via the modal switch', async () => {
    const { getByTestId } = render(
      <ThemeProvider><GameScreen /></ThemeProvider>
    );
    await act(async () => {});
    fireEvent.press(getByTestId('settings-btn'));
    expect(getByTestId('dark-mode-switch').props.value).toBe(false);
    fireEvent(getByTestId('dark-mode-switch'), 'valueChange', true);
    expect(getByTestId('dark-mode-switch').props.value).toBe(true);
  });

  it('restarts the current stage via the modal', () => {
    const tw = stage1.targetWords[0];
    const total = stage1.targetWords.length;
    const { getAllByText, getByText, getByTestId } = render(<GameScreen />);
    // Solve one word
    tapSyllables(getAllByText, tw.syllables);
    fireEvent.press(getByText('Submit'));
    expect(getByText(`1 / ${total} found`)).toBeTruthy();

    // Open settings and restart stage
    fireEvent.press(getByTestId('settings-btn'));
    fireEvent.press(getByTestId('restart-stage-btn'));
    const restartButtons = (Alert.alert as jest.Mock).mock.calls.at(-1)![2] as { text: string; onPress?: () => void }[];
    act(() => { restartButtons.find((b) => b.text === 'Restart')!.onPress!(); });

    // Progress should reset to 0, still on stage 1
    expect(getByText(`0 / ${total} found`)).toBeTruthy();
    expect(getByText(stage1.name)).toBeTruthy();
  });
});

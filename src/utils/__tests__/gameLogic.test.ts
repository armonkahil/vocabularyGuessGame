import { buildWordFromSyllables, validateWord, isStageComplete } from '../gameLogic';
import type { Stage } from '../../types';

const mockStage: Stage = {
  id: 'stage-test',
  name: 'Test Stage',
  syllablePool: ['sun', 'light', 'rain', 'cloud', 'dark'],
  targetWords: [
    { id: 'tw-1', word: 'sunlight', syllables: ['sun', 'light'], definition: 'Natural light from the sun.' },
    { id: 'tw-2', word: 'raincloud', syllables: ['rain', 'cloud'], definition: 'A cloud that produces rain.' },
    { id: 'tw-3', word: 'sunrain', syllables: ['sun', 'rain'], definition: 'A made-up test word.' },
  ],
};

// ─── buildWordFromSyllables ───────────────────────────────────────────────────

describe('buildWordFromSyllables', () => {
  it('joins syllables into a single lowercase string', () => {
    expect(buildWordFromSyllables(['sun', 'light'])).toBe('sunlight');
  });

  it('lowercases uppercase syllables', () => {
    expect(buildWordFromSyllables(['SUN', 'LIGHT'])).toBe('sunlight');
  });

  it('lowercases mixed-case syllables', () => {
    expect(buildWordFromSyllables(['Rain', 'Cloud'])).toBe('raincloud');
  });

  it('returns empty string for an empty array', () => {
    expect(buildWordFromSyllables([])).toBe('');
  });

  it('handles a single syllable', () => {
    expect(buildWordFromSyllables(['dark'])).toBe('dark');
  });

  it('joins three syllables correctly', () => {
    expect(buildWordFromSyllables(['mis', 'un', 'der'])).toBe('misunder');
  });
});

// ─── validateWord ────────────────────────────────────────────────────────────

describe('validateWord', () => {
  it('returns the matching TargetWord when the built word is correct and unsolved', () => {
    const result = validateWord('sunlight', mockStage, new Set());
    expect(result).not.toBeNull();
    expect(result?.id).toBe('tw-1');
    expect(result?.word).toBe('sunlight');
  });

  it('returns null when the built word does not match any target', () => {
    const result = validateWord('darkcloud', mockStage, new Set());
    expect(result).toBeNull();
  });

  it('returns null for an already-solved word', () => {
    const solvedIds = new Set(['tw-1']);
    const result = validateWord('sunlight', mockStage, solvedIds);
    expect(result).toBeNull();
  });

  it('still returns a match for a different unsolved word when some are solved', () => {
    const solvedIds = new Set(['tw-1']);
    const result = validateWord('raincloud', mockStage, solvedIds);
    expect(result).not.toBeNull();
    expect(result?.id).toBe('tw-2');
  });

  it('returns null for an empty string', () => {
    expect(validateWord('', mockStage, new Set())).toBeNull();
  });

  it('is case-sensitive (must match stored lowercase word)', () => {
    // target words store lowercase; uppercase input should not match
    expect(validateWord('SUNLIGHT', mockStage, new Set())).toBeNull();
  });

  it('returns the correct match when all other words are already solved', () => {
    const solvedIds = new Set(['tw-1', 'tw-2']);
    const result = validateWord('sunrain', mockStage, solvedIds);
    expect(result).not.toBeNull();
    expect(result?.id).toBe('tw-3');
  });
});

// ─── isStageComplete ──────────────────────────────────────────────────────────

describe('isStageComplete', () => {
  it('returns false when no words are solved', () => {
    expect(isStageComplete(mockStage, new Set())).toBe(false);
  });

  it('returns false when only some words are solved', () => {
    expect(isStageComplete(mockStage, new Set(['tw-1', 'tw-2']))).toBe(false);
  });

  it('returns true when all words are solved', () => {
    const allSolved = new Set(['tw-1', 'tw-2', 'tw-3']);
    expect(isStageComplete(mockStage, allSolved)).toBe(true);
  });

  it('returns true for a stage with no target words (vacuous truth)', () => {
    const emptyStage: Stage = { ...mockStage, targetWords: [] };
    expect(isStageComplete(emptyStage, new Set())).toBe(true);
  });

  it('returns false when solved set contains non-existent ids only', () => {
    const bogusIds = new Set(['bogus-1', 'bogus-2', 'bogus-3']);
    expect(isStageComplete(mockStage, bogusIds)).toBe(false);
  });
});

import { Stage, TargetWord } from '../types';

/** Joins an ordered array of syllables into a single lowercase word. */
export function buildWordFromSyllables(syllables: string[]): string {
  return syllables.join('').toLowerCase();
}

/**
 * Checks whether `builtWord` matches any unsolved target word in the stage.
 * Returns the matching TargetWord on success, or null on failure.
 */
export function validateWord(
  builtWord: string,
  stage: Stage,
  solvedWordIds: Set<string>,
): TargetWord | null {
  return (
    stage.targetWords.find(
      (tw) => tw.word === builtWord && !solvedWordIds.has(tw.id),
    ) ?? null
  );
}

/** Returns true when every target word in the stage has been solved. */
export function isStageComplete(stage: Stage, solvedWordIds: Set<string>): boolean {
  return stage.targetWords.every((tw) => solvedWordIds.has(tw.id));
}

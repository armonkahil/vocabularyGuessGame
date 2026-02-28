export interface TargetWord {
  id: string;
  /** The complete assembled word, e.g. "misunderstand" */
  word: string;
  /** Ordered syllables that form the word, e.g. ["mis", "un", "der", "stand"] */
  syllables: string[];
  definition: string;
}

export interface Stage {
  id: string;
  name: string;
  /** Flat pool of unique syllables available on screen */
  syllablePool: string[];
  targetWords: TargetWord[];
}

export type FeedbackState = 'correct' | 'incorrect' | null;

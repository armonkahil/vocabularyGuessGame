import { ALL_STAGES } from '../stages';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Build a flat list of every word string used across all stages. */
function allWords(): string[] {
  return ALL_STAGES.flatMap((s) => s.targetWords.map((tw) => tw.word));
}

// ─── Top-level shape ─────────────────────────────────────────────────────────

describe('ALL_STAGES', () => {
  it('exports exactly 50 stages', () => {
    expect(ALL_STAGES).toHaveLength(50);
  });

  it('every stage has a non-empty id', () => {
    ALL_STAGES.forEach((s) => {
      expect(s.id).toBeTruthy();
    });
  });

  it('stage ids are unique', () => {
    const ids = ALL_STAGES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every stage has a non-empty name', () => {
    ALL_STAGES.forEach((s) => {
      expect(s.name.trim().length).toBeGreaterThan(0);
    });
  });
});

// ─── syllablePool ─────────────────────────────────────────────────────────────

describe('syllablePool', () => {
  it('every stage has at least 7 syllables in the pool', () => {
    ALL_STAGES.forEach((s) => {
      expect(s.syllablePool.length).toBeGreaterThanOrEqual(7);
    });
  });

  it('every syllable in the pool is a non-empty string', () => {
    ALL_STAGES.forEach((s) => {
      s.syllablePool.forEach((syl) => {
        expect(syl.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('no duplicate syllables within the same pool', () => {
    ALL_STAGES.forEach((s) => {
      const unique = new Set(s.syllablePool);
      expect(unique.size).toBe(s.syllablePool.length);
    });
  });
});

// ─── targetWords count ───────────────────────────────────────────────────────

describe('targetWords count per stage', () => {
  it('every stage has between 7 and 8 target words', () => {
    ALL_STAGES.forEach((s) => {
      expect(s.targetWords.length).toBeGreaterThanOrEqual(7);
      expect(s.targetWords.length).toBeLessThanOrEqual(8);
    });
  });
});

// ─── TargetWord shape ─────────────────────────────────────────────────────────

describe('TargetWord shape', () => {
  it('every target word has a non-empty id', () => {
    ALL_STAGES.forEach((s) => {
      s.targetWords.forEach((tw) => {
        expect(tw.id).toBeTruthy();
      });
    });
  });

  it('every target word has a non-empty word string', () => {
    ALL_STAGES.forEach((s) => {
      s.targetWords.forEach((tw) => {
        expect(tw.word.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('every target word has a non-empty definition', () => {
    ALL_STAGES.forEach((s) => {
      s.targetWords.forEach((tw) => {
        expect(tw.definition.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it('every target word has at least 1 syllable listed', () => {
    ALL_STAGES.forEach((s) => {
      s.targetWords.forEach((tw) => {
        expect(tw.syllables.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});

// ─── Word-IDs uniqueness ──────────────────────────────────────────────────────

describe('word ids', () => {
  it('all target word ids are unique across all stages', () => {
    const ids = ALL_STAGES.flatMap((s) => s.targetWords.map((tw) => tw.id));
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ─── No duplicate words across stages ────────────────────────────────────────

describe('cross-stage word uniqueness', () => {
  it('no word string appears in more than one stage', () => {
    const words = allWords();
    const duplicates = words.filter((w, i) => words.indexOf(w) !== i);
    expect(duplicates).toEqual([]);
  });
});

// ─── Syllable-pool containment ────────────────────────────────────────────────

describe('syllable-pool containment', () => {
  it('every syllable used in a targetWord exists in that stage\'s syllablePool', () => {
    ALL_STAGES.forEach((s) => {
      const pool = new Set(s.syllablePool);
      s.targetWords.forEach((tw) => {
        tw.syllables.forEach((syl) => {
          expect(pool.has(syl)).toBe(true);
        });
      });
    });
  });
});

// ─── Syllable concatenation matches word ─────────────────────────────────────

describe('syllable concatenation', () => {
  it('joining syllables produces the stored word for every target word', () => {
    ALL_STAGES.forEach((s) => {
      s.targetWords.forEach((tw) => {
        expect(tw.syllables.join('')).toBe(tw.word);
      });
    });
  });
});

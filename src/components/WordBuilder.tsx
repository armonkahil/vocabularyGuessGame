import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FeedbackState } from '../types';

interface Props {
  syllables: string[];
  feedback: FeedbackState;
  onClear: () => void;
  onSubmit: () => void;
}

const BORDER_COLOR: Record<NonNullable<FeedbackState>, string> = {
  correct: '#27AE60',
  incorrect: '#E74C3C',
};

export const WordBuilder: React.FC<Props> = ({ syllables, feedback, onClear, onSubmit }) => {
  const builtWord = syllables.join('');
  const borderColor = feedback ? BORDER_COLOR[feedback] : '#4A90E2';
  const canSubmit = syllables.length > 0;

  return (
    <View style={styles.container}>
      {/* ── Word display ───────────────────────── */}
      <View style={[styles.wordDisplay, { borderColor }]}>
        {syllables.length === 0 ? (
          <Text style={styles.placeholder}>Tap syllables to build a word…</Text>
        ) : (
          <View style={styles.syllableRow}>
            {syllables.map((s, i) => (
              <View key={i} style={styles.chip}>
                <Text style={styles.chipText}>{s}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* ── Full word preview ──────────────────── */}
      {syllables.length > 0 && (
        <Text style={[styles.wordPreview, feedback === 'correct' && styles.correctPreview]}>
          {builtWord}
        </Text>
      )}

      {/* ── Actions ───────────────────────────── */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.clearBtn} onPress={onClear}>
          <Text style={styles.clearLabel}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitBtn, !canSubmit && styles.submitDisabled]}
          onPress={onSubmit}
          disabled={!canSubmit}
        >
          <Text style={styles.submitLabel}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  wordDisplay: {
    minHeight: 56,
    borderWidth: 2,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  placeholder: {
    color: '#A0AEC0',
    fontSize: 15,
    fontStyle: 'italic',
  },
  syllableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
  },
  chip: {
    backgroundColor: '#4A90E2',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  chipText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15,
  },
  wordPreview: {
    textAlign: 'center',
    marginTop: 6,
    fontSize: 20,
    fontWeight: '800',
    color: '#2D3748',
    letterSpacing: 1.5,
  },
  correctPreview: {
    color: '#27AE60',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 10,
  },
  clearBtn: {
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#E2E8F0',
  },
  clearLabel: {
    color: '#4A5568',
    fontWeight: '600',
    fontSize: 15,
  },
  submitBtn: {
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
  },
  submitDisabled: {
    backgroundColor: '#A0AEC0',
  },
  submitLabel: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15,
  },
});

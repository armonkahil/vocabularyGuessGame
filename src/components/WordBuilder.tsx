import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { lightColors } from '../theme/colors';
import type { Colors } from '../theme/colors';
import { FeedbackState } from '../types';

interface Props {
  syllables: string[];
  feedback: FeedbackState;
  colors?: Colors;
  onClear: () => void;
  onSubmit: () => void;
}

export const WordBuilder: React.FC<Props> = ({ syllables, feedback, colors = lightColors, onClear, onSubmit }) => {
  const builtWord = syllables.join('');
  const canSubmit = syllables.length > 0;

  let borderColor = colors.accent;
  if (feedback === 'correct') borderColor = colors.correct;
  else if (feedback === 'incorrect') borderColor = colors.incorrect;

  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      {/* ── Word display ───────────────────────── */}
      <View style={[styles.wordDisplay, { borderColor }]}>
        {syllables.length === 0 ? (
          <Text style={styles.placeholder}>Tap syllables to build a word…</Text>
        ) : (
          <View style={styles.syllableRow}>
            {syllables.map((s, i) => (
              <View key={`${s}-${i}`} style={styles.chip}>
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

const makeStyles = (c: Colors) =>
  StyleSheet.create({
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
      backgroundColor: c.surfaceAlt,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    placeholder: {
      color: c.textPlaceholder,
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
      backgroundColor: c.accent,
      borderRadius: 6,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    chipText: {
      color: c.onAccent,
      fontWeight: '700',
      fontSize: 15,
    },
    wordPreview: {
      textAlign: 'center',
      marginTop: 6,
      fontSize: 20,
      fontWeight: '800',
      color: c.textPrimary,
      letterSpacing: 1.5,
    },
    correctPreview: {
      color: c.correct,
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
      backgroundColor: c.clearBg,
    },
    clearLabel: {
      color: c.textSecondary,
      fontWeight: '600',
      fontSize: 15,
    },
    submitBtn: {
      paddingHorizontal: 22,
      paddingVertical: 9,
      borderRadius: 8,
      backgroundColor: c.accent,
    },
    submitDisabled: {
      backgroundColor: c.textPlaceholder,
    },
    submitLabel: {
      color: c.onAccent,
      fontWeight: '700',
      fontSize: 15,
    },
  });

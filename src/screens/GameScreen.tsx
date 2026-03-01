import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
} from 'react-native';

import { stage1 } from '../data/stages';
import { SyllableButton } from '../components/SyllableButton';
import { WordBuilder } from '../components/WordBuilder';
import { HintList } from '../components/HintList';
import { buildWordFromSyllables, validateWord, isStageComplete } from '../utils/gameLogic';
import type { FeedbackState } from '../types';

/**
 * GameScreen — main and only screen for the vocabulary guessing game.
 *
 * Layout (portrait):
 * ┌─────────────────────────────────┐
 * │           Header                │
 * ├─────────────────────────────────┤  ←── Section 2 (flex: 45)
 * │  [Word Builder]                 │
 * │  ─────────────────────────────  │
 * │  Hints — swipe to browse ──→    │  (horizontal FlatList of hint cards)
 * ├═════════════════════════════════╡  ←── thick divider
 * │  Syllable Pool                  │  ←── Section 1 (flex: 55)
 * │  [mis] [un] [der] [stand] …     │
 * │  [take] [hap] [py] [for] …      │
 * └─────────────────────────────────┘
 */
export const GameScreen: React.FC = () => {
  const stage = stage1;

  // ── Core state ──────────────────────────────────────────────────────────────
  const [selectedSyllables, setSelectedSyllables] = useState<string[]>([]);
  const [solvedWordIds, setSolvedWordIds] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<FeedbackState>(null);

  // Clear feedback after a short animation window
  useEffect(() => {
    if (feedback === null) return;
    const timer = setTimeout(() => setFeedback(null), 900);
    return () => clearTimeout(timer);
  }, [feedback]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleSyllablePress = useCallback((syllable: string) => {
    setSelectedSyllables((prev) => [...prev, syllable]);
    setFeedback(null);
  }, []);

  const handleClear = useCallback(() => {
    setSelectedSyllables([]);
    setFeedback(null);
  }, []);

  const handleSubmit = useCallback(() => {
    const builtWord = buildWordFromSyllables(selectedSyllables);
    const match = validateWord(builtWord, stage, solvedWordIds);

    if (match) {
      const nextSolved = new Set([...solvedWordIds, match.id]);
      setFeedback('correct');
      setSolvedWordIds(nextSolved);
      setSelectedSyllables([]);

      if (isStageComplete(stage, nextSolved)) {
        setTimeout(
          () => Alert.alert('Stage Complete! 🎉', 'You found all the words!'),
          800,
        );
      }
    } else {
      setFeedback('incorrect');
      // Keep the built word visible so the player can see what was wrong
    }
  }, [selectedSyllables, solvedWordIds, stage]);

  // ── Derived values ───────────────────────────────────────────────────────────
  const solvedCount = solvedWordIds.size;
  const totalCount = stage.targetWords.length;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <Text style={styles.stageTitle}>{stage.name}</Text>
        <Text style={styles.progress}>
          {solvedCount} / {totalCount} found
        </Text>
      </View>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 1 — Syllable Pool  (top 55% of remaining space)
      ══════════════════════════════════════════════════════════════════════ */}
      <View style={styles.sectionSyllables}>
        <Text style={styles.sectionLabel}>Syllable Pool</Text>
        <ScrollView contentContainerStyle={styles.syllableGrid}>
          {stage.syllablePool.map((syllable) => (
            <SyllableButton
              key={syllable}
              syllable={syllable}
              onPress={handleSyllablePress}
            />
          ))}
        </ScrollView>
      </View>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — Display & Hints  (bottom 45% of remaining space)
      ══════════════════════════════════════════════════════════════════════ */}
      <View style={styles.sectionDisplay}>

        {/* 2a — Word Builder */}
        <WordBuilder
          syllables={selectedSyllables}
          feedback={feedback}
          onClear={handleClear}
          onSubmit={handleSubmit}
        />

        <View style={styles.internalDivider} />

        {/* 2b — Hint list */}
        <Text style={styles.sectionLabel}>Hints</Text>
        <HintList targetWords={stage.targetWords} solvedWordIds={solvedWordIds} />

      </View>

    </SafeAreaView>
  );
};

// ── Styles ─────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ── Header ──────────────────────────────────────────
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  stageTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3748',
  },
  progress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#718096',
  },

  // ── Section 1: Syllable Pool ─────────────────────────
  // flex: 55 means this takes 55 parts out of 100 → 55% of space
  sectionSyllables: {
    flex: 55,
    backgroundColor: '#F7FAFC',
    borderBottomWidth: 3,
    borderBottomColor: '#4A90E2',
    paddingTop: 4,
  },

  // ── Section 2: Display & Hints ───────────────────────
  // flex: 45 means this takes 45 parts out of 45+55=100 → 45% of space
  sectionDisplay: {
    flex: 45,
    paddingBottom: 4,
    overflow: 'hidden',
  },

  // ── Syllable grid (row-wrap inside ScrollView) ───────
  syllableGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  // ── Shared ───────────────────────────────────────────
  internalDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#A0AEC0',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 2,
  },
});

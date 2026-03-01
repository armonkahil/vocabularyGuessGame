import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  TouchableOpacity,
} from 'react-native';

import { stage1 } from '../data/stages';
import { SyllableButton } from '../components/SyllableButton';
import { WordBuilder } from '../components/WordBuilder';
import { HintList } from '../components/HintList';
import { buildWordFromSyllables, validateWord, isStageComplete } from '../utils/gameLogic';
import { useTheme } from '../theme/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { FeedbackState } from '../types';
import type { Colors } from '../theme/colors';

export const GameScreen: React.FC = () => {
  const stage = stage1;
  const { mode, colors, toggle } = useTheme();
  const { bottom: bottomInset } = useSafeAreaInsets();
  // Mirror the bottom safe-area height so the banner balances it visually.
  // Fall back to 34 on devices that report 0 (e.g. older iPhones / Android).
  const bannerHeight = bottomInset > 0 ? bottomInset : 34;

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
        void setTimeout(
          () => Alert.alert('Stage Complete! 🎉', 'You found all the words!'),
          800,
        );
      }
    } else {
      setFeedback('incorrect');
    }
  }, [selectedSyllables, solvedWordIds, stage]);

  // ── Derived values ───────────────────────────────────────────────────────────
  const solvedCount = solvedWordIds.size;
  const totalCount = stage.targetWords.length;

  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle={mode === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.bg}
      />

      {/* ── Banner ──────────────────────────────────────────────────────────── */}
      <View style={[styles.banner, { height: bannerHeight }]}>
        <Text style={styles.bannerSyl}>SYL</Text>
        <Text style={styles.bannerDot}> · </Text>
        <Text style={styles.bannerLa}>LA</Text>
        <Text style={styles.bannerDot}> · </Text>
        <Text style={styles.bannerBuild}>BUILD</Text>
      </View>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <Text style={styles.stageTitle}>{stage.name}</Text>
        <View style={styles.headerRight}>
          <Text style={styles.progress}>
            {solvedCount} / {totalCount} found
          </Text>
          <TouchableOpacity onPress={toggle} style={styles.themeBtn}>
            <Text style={styles.themeBtnLabel}>
              {mode === 'light' ? 'Dark' : 'Light'}
            </Text>
          </TouchableOpacity>
        </View>
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
              colors={colors}
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
          colors={colors}
          onClear={handleClear}
          onSubmit={handleSubmit}
        />

        <View style={styles.internalDivider} />

        {/* 2b — Hint list */}
        <Text style={styles.sectionLabel}>Hints</Text>
        <HintList targetWords={stage.targetWords} solvedWordIds={solvedWordIds} colors={colors} />

      </View>

    </SafeAreaView>
  );
};

// ── Styles (theme-aware) ───────────────────────────────────────────────────────

const makeStyles = (c: Colors) =>
  StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: c.bg,
    },

    // ── Banner ──────────────────────────────────────────
    banner: {
      backgroundColor: c.accent,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bannerSyl: {
      color: c.onAccent,
      fontWeight: '900',
      fontSize: 13,
      letterSpacing: 3,
      opacity: 0.75,
    },
    bannerDot: {
      color: c.onAccent,
      fontWeight: '900',
      fontSize: 13,
      opacity: 0.45,
    },
    bannerLa: {
      color: c.onAccent,
      fontWeight: '900',
      fontSize: 13,
      letterSpacing: 3,
      opacity: 0.75,
    },
    bannerBuild: {
      color: c.onAccent,
      fontWeight: '900',
      fontSize: 15,
      letterSpacing: 4,
    },

    // ── Header ──────────────────────────────────────────
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: c.border,
      backgroundColor: c.bg,
    },
    stageTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: c.textPrimary,
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    progress: {
      fontSize: 14,
      fontWeight: '600',
      color: c.textMuted,
    },
    themeBtn: {
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: c.border,
    },
    themeBtnLabel: {
      fontSize: 13,
      fontWeight: '600',
      color: c.textSecondary,
    },

    // ── Section 1: Syllable Pool ─────────────────────────
    // Sizes to content; scrollable if syllables overflow maxHeight
    sectionSyllables: {
      maxHeight: 220,
      backgroundColor: c.surface,
      borderBottomWidth: 3,
      borderBottomColor: c.accent,
      paddingTop: 4,
    },

    // ── Section 2: Display & Hints ───────────────────────
    // Fills all remaining space directly beneath the syllable pool
    sectionDisplay: {
      flex: 1,
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
      backgroundColor: c.border,
      marginHorizontal: 16,
      marginVertical: 8,
    },
    sectionLabel: {
      fontSize: 11,
      fontWeight: '700',
      color: c.textPlaceholder,
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      paddingHorizontal: 16,
      paddingTop: 4,
      paddingBottom: 2,
    },
  });
